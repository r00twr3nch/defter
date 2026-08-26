(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(pointer:fine)").matches;
  const kenar = document.body.classList.contains("kenar");
  const home = document.body.classList.contains("home");
  const stagePic = document.querySelector(".stage picture") || document.querySelector(".stage-img");
  const glow = document.querySelector(".glow");

  const hourEl = (() => {
    let el = document.querySelector(".hour");
    if (el) return el;
    const host = document.querySelector("footer span");
    if (!host) return null;
    host.insertAdjacentHTML("beforeend", ' · <span class="hour"></span>');
    return host.querySelector(".hour");
  })();
  const tickClock = () => {
    if (!hourEl) return;
    hourEl.textContent = new Intl.DateTimeFormat(
      document.documentElement.lang === "en" ? "en-GB" : "tr-TR",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Istanbul",
      }
    ).format(new Date());
  };
  tickClock();
  setInterval(tickClock, 20000);

  document.body.classList.add("ready");

  if (document.body.classList.contains("face") && !reduce && !document.querySelector(".aura")) {
    const aura = document.createElement("div");
    aura.className = "aura";
    aura.setAttribute("aria-hidden", "true");
    aura.innerHTML = "<i></i><i></i><i></i>";
    document.body.prepend(aura);

    const c = document.createElement("canvas");
    c.id = "drift";
    c.setAttribute("aria-hidden", "true");
    document.body.prepend(c);
    const ctx = c.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = 0, h = 0, mx = -9999, my = -9999;
    const size = () => {
      w = innerWidth;
      h = innerHeight;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = w + "px";
      c.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    addEventListener("resize", size, { passive: true });
    addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    addEventListener("mouseleave", () => { mx = -9999; my = -9999; });

    const n = w < 800 ? 32 : 64;
    const dots = Array.from({ length: n }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.55) * 0.55,
      r: Math.random() * 1.7 + 0.35,
      a: Math.random() * 0.45 + 0.18,
      p: Math.random() * Math.PI * 2,
    }));
    let streaks = [];
    const spawn = () => {
      streaks.push({
        x: Math.random() * w * 0.2,
        y: Math.random() * h * 0.75,
        vx: 5 + Math.random() * 7,
        vy: 1 + Math.random() * 1.8,
        life: 1,
      });
    };
    spawn();
    setInterval(spawn, 2200);

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 && dist > 1) {
          const f = ((160 - dist) / 160) * 0.55;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
        d.vx *= 0.985;
        d.vy *= 0.985;
        d.x += d.vx + Math.sin(d.p) * 0.22;
        d.y += d.vy + Math.cos(d.p * 0.8) * 0.12;
        d.p += 0.035;
        if (d.x < -12) d.x = w + 12;
        if (d.x > w + 12) d.x = -12;
        if (d.y < -12) d.y = h + 12;
        if (d.y > h + 12) d.y = -12;
        const pulse = 0.5 + Math.sin(d.p * 1.6) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(212,176,122,${d.a * pulse})`;
        ctx.arc(d.x, d.y, d.r * (0.85 + pulse * 0.25), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.lineWidth = 0.7;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i], b = dots[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 10000) {
            const alpha = (1 - Math.sqrt(d2) / 100) * 0.22;
            ctx.strokeStyle = `rgba(196,165,116,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      streaks = streaks.filter((s) => s.life > 0 && s.x < w + 40);
      for (const s of streaks) {
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.014;
        ctx.strokeStyle = `rgba(236,210,150,${Math.max(0, s.life) * 0.65})`;
        ctx.lineWidth = 1.35;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 9, s.y - s.vy * 9);
        ctx.stroke();
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  const applyLang = (lang) => {
    const en = lang === "en";
    document.documentElement.lang = en ? "en" : "tr";
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (el.dataset.tr == null) el.dataset.tr = el.innerHTML;
      el.innerHTML = en ? el.dataset.en : el.dataset.tr;
    });
    const btn = document.querySelector(".lang-toggle");
    if (btn) {
      btn.textContent = en ? "TR" : "EN";
      btn.setAttribute("aria-label", en ? "Türkçe" : "English");
    }
    try { localStorage.setItem("yed-lang", en ? "en" : "tr"); } catch (_) {}
    tickClock();
  };

  if (document.body.classList.contains("i18n")) {
    let lang = "tr";
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "tr") lang = q;
    else {
      try { lang = localStorage.getItem("yed-lang") === "en" ? "en" : "tr"; } catch (_) {}
    }
    applyLang(lang);
    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        applyLang(document.documentElement.lang === "en" ? "tr" : "en");
      });
    }
  }

  const openKenar = () => {
    if (kenar) return;
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = "yazilar.html"; }, 280);
  };

  if (!kenar) {
    const mark = document.querySelector(".mark");
    if (mark) {
      let holdTimer = 0;
      let flipped = false;
      const arm = (e) => {
        if (e.button && e.button !== 0) return;
        flipped = false;
        mark.classList.add("holding");
        holdTimer = setTimeout(() => {
          flipped = true;
          openKenar();
        }, 1100);
      };
      const disarm = () => {
        mark.classList.remove("holding");
        clearTimeout(holdTimer);
      };
      mark.addEventListener("pointerdown", arm);
      mark.addEventListener("pointerup", disarm);
      mark.addEventListener("pointerleave", disarm);
      mark.addEventListener("click", (e) => {
        if (flipped) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      });
    }
    let buf = "";
    addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-8);
      if (buf.includes("kenar") || buf.includes("lamba")) openKenar();
    });

    if (!reduce) {
      const show = (el) => el.classList.add("in");
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) show(en.target); });
      }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
      const armReveal = () => {
        document.querySelectorAll(".reveal").forEach((el) => {
          io.observe(el);
          if (el.getBoundingClientRect().top < innerHeight * 0.95) show(el);
        });
      };
      requestAnimationFrame(armReveal);
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }

    const mesh = document.querySelector(".mesh");
    if (mesh && fine) {
      addEventListener("mousemove", (e) => {
        mesh.style.setProperty("--mx", `${(e.clientX / innerWidth) * 100}%`);
        mesh.style.setProperty("--my", `${(e.clientY / innerHeight) * 100}%`);
      }, { passive: true });
    }

    if (fine && innerWidth > 860 && !reduce) {
      const aim = document.createElement("div");
      aim.className = "aim";
      aim.setAttribute("aria-hidden", "true");
      document.body.append(aim);
      document.documentElement.classList.add("has-aim");
      let ax = innerWidth / 2, ay = innerHeight / 2, tx = ax, ty = ay;
      addEventListener("mousemove", (e) => {
        tx = e.clientX; ty = e.clientY;
        const hit = e.target && e.target.closest && e.target.closest("a, button");
        aim.classList.toggle("on", !!hit);
      }, { passive: true });
      const spin = () => {
        ax += (tx - ax) * 0.22;
        ay += (ty - ay) * 0.22;
        aim.style.transform = `translate(${ax}px, ${ay}px)`;
        requestAnimationFrame(spin);
      };
      spin();
    }

    const bar = document.querySelector(".progress");
    if (bar) {
      const paint = () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      };
      addEventListener("scroll", paint, { passive: true });
      paint();
    }

    if (fine && !reduce) {
      document.querySelectorAll(".work-board .card, .work-grid .card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
        });
        card.addEventListener("mouseleave", () => { card.style.transform = ""; });
      });
    }
  }

  if (!reduce) {
    document.querySelectorAll('a[href$=".html"], a[href*=".html#"]').forEach((a) => {
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      a.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
        if (url.pathname === location.pathname && !url.hash) return;
        if (url.hash && url.pathname === location.pathname) return;
        e.preventDefault();
        document.body.classList.add("leaving");
        setTimeout(() => { location.href = a.href; }, 280);
      });
    });
  }

  let px = innerWidth * (kenar ? 0.72 : 0.78), py = innerHeight * 0.42;
  let lx = px, ly = py, sx = px, sy = py;

  if (stagePic && !reduce && fine) {
    addEventListener("mousemove", (e) => {
      px = e.clientX;
      py = e.clientY;
    }, { passive: true });
  }

  if (kenar && !reduce) {
    const flare = () => {
      document.body.classList.add("flare");
      clearTimeout(flare._t);
      flare._t = setTimeout(() => document.body.classList.remove("flare"), 900);
    };
    const hit = document.querySelector(".lamp-hit");
    if (hit) hit.addEventListener("click", flare);

    const lantern = document.createElement("div");
    lantern.className = "lantern";
    lantern.setAttribute("aria-hidden", "true");
    const spot = document.createElement("div");
    spot.className = "spot";
    spot.setAttribute("aria-hidden", "true");
    const useLantern = fine && innerWidth > 860;
    if (useLantern) {
      document.documentElement.classList.add("has-lantern");
      document.body.append(spot, lantern);
      addEventListener("mousemove", (e) => {
        const t = e.target;
        lantern.classList.toggle("is-link", !!(t && t.closest && t.closest("a, button, .lamp-hit")));
      }, { passive: true });
      addEventListener("mouseleave", () => {
        lantern.style.opacity = "0";
        spot.style.opacity = "0";
      });
      addEventListener("mouseenter", () => {
        lantern.style.opacity = "";
        spot.style.opacity = "";
      });
    }

    const c = document.getElementById("dust");
    const ctx = c ? c.getContext("2d") : null;
    const n = innerWidth < 800 ? 28 : 64;
    const dots = ctx
      ? Array.from({ length: n }, () => ({
          x: Math.random(), y: Math.random(),
          r: Math.random() * 1.5 + .18,
          s: Math.random() * .00034 + .00005,
          a: Math.random() * .45 + .06,
        }))
      : [];
    const fit = () => { if (c) { c.width = innerWidth; c.height = innerHeight; } };
    addEventListener("resize", fit, { passive: true });
    fit();

    const loop = () => {
      const tx = px / innerWidth, ty = py / innerHeight;
      const dx = (tx - 0.5) * 12, dy = (ty - 0.5) * 8;
      if (stagePic) stagePic.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
      if (glow) glow.style.translate = `${dx * 1.4}px ${dy * 1.4}px`;
      if (useLantern) {
        lx += (px - lx) * 0.38;
        ly += (py - ly) * 0.38;
        sx += (px - sx) * 0.11;
        sy += (py - sy) * 0.11;
        lantern.style.transform = `translate(${lx}px, ${ly}px)`;
        spot.style.transform = `translate(${sx}px, ${sy}px)`;
      }
      if (ctx) {
        ctx.clearRect(0, 0, c.width, c.height);
        const wind = (tx - 0.5) * 0.0009;
        for (const d of dots) {
          d.y -= d.s;
          d.x += Math.sin(d.y * 16) * .00012 + wind;
          if (d.y < 0) { d.y = 1; d.x = Math.random(); }
          if (d.x < 0) d.x += 1;
          if (d.x > 1) d.x -= 1;
          ctx.fillStyle = `rgba(255,236,200,${d.a})`;
          ctx.beginPath();
          ctx.arc(c.width * (0.5 + d.x * 0.5) + dx * 0.5, c.height * (0.06 + d.y * 0.84) + dy * 0.4, d.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    };
    loop();
    return;
  }

  if (stagePic && !reduce && fine) {
    const loop = () => {
      const tx = px / innerWidth, ty = py / innerHeight;
      const dx = (tx - 0.5) * 8, dy = (ty - 0.5) * 5;
      stagePic.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
      if (glow) glow.style.translate = `${dx}px ${dy}px`;
      requestAnimationFrame(loop);
    };
    loop();
  }
})();
