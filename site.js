(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const home = document.body.classList.contains("home");
  const stagePic = document.querySelector(".stage picture") || document.querySelector(".stage-img");
  const glow = document.querySelector(".glow");

  const hourEl = (() => {
    const host = document.querySelector("footer span");
    if (!host) return null;
    if (!host.querySelector(".hour")) {
      host.insertAdjacentHTML("beforeend", ' · <span class="hour"></span>');
    }
    return host.querySelector(".hour");
  })();
  const tickClock = () => {
    if (!hourEl) return;
    hourEl.textContent = new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Istanbul",
    }).format(new Date());
  };
  tickClock();
  setInterval(tickClock, 20000);

  const scribble = document.querySelector(".scribble");
  if (scribble && home) {
    const h = Number(
      new Intl.DateTimeFormat("tr-TR", { hour: "numeric", hour12: false, timeZone: "Europe/Istanbul" }).format(new Date())
    );
    scribble.textContent =
      h < 5 ? "seher vakti." : h < 12 ? "sabahın körü." : h < 18 ? "gündüz de yanar." : "gece vakti.";
  }

  document.body.classList.add("ready");

  if (!reduce) {
    document.querySelectorAll('a[href$=".html"]').forEach((a) => {
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      a.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
        if (url.pathname === location.pathname) return;
        e.preventDefault();
        document.body.classList.add("leaving");
        setTimeout(() => { location.href = a.href; }, 280);
      });
    });
  }

  const mark = document.querySelector(".mark");
  if (mark && home) {
    mark.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.toggle("dim");
      mark.setAttribute("title", document.body.classList.contains("dim") ? "lambayı yak" : "lambayı kıs");
    });
    mark.title = "lambayı kıs";
  }

  const flare = () => {
    document.body.classList.add("flare");
    clearTimeout(flare._t);
    flare._t = setTimeout(() => document.body.classList.remove("flare"), 900);
  };
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => document.body.classList.add("warm"));
    card.addEventListener("mouseleave", () => document.body.classList.remove("warm"));
  });
  const hit = document.querySelector(".lamp-hit");
  if (hit) hit.addEventListener("click", flare);

  let tx = 0.5, ty = 0.5, mx = 0.5, my = 0.5;
  if (!reduce && matchMedia("(pointer:fine)").matches) {
    addEventListener("mousemove", (e) => {
      tx = e.clientX / innerWidth;
      ty = e.clientY / innerHeight;
    }, { passive: true });
  }

  const c = document.getElementById("dust");
  if (!c || reduce) return;
  const ctx = c.getContext("2d");
  const n = innerWidth < 800 ? 24 : home ? 88 : 40;
  const dots = Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.5 + .18,
    s: Math.random() * .00034 + .00005,
    a: Math.random() * .45 + .06,
  }));
  const fit = () => { c.width = innerWidth; c.height = innerHeight; };
  addEventListener("resize", fit, { passive: true });
  fit();

  const loop = () => {
    mx += (tx - mx) * 0.045;
    my += (ty - my) * 0.045;
    const dx = (mx - 0.5) * (home ? 22 : 10);
    const dy = (my - 0.5) * (home ? 14 : 8);
    if (stagePic) {
      stagePic.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
    }
    if (glow) {
      glow.style.translate = `${dx * 1.4}px ${dy * 1.4}px`;
    }

    ctx.clearRect(0, 0, c.width, c.height);
    const wind = (mx - 0.5) * 0.0009;
    for (const d of dots) {
      d.y -= d.s;
      d.x += Math.sin(d.y * 16) * .00012 + wind;
      if (d.y < 0) { d.y = 1; d.x = Math.random(); }
      if (d.x < 0) d.x += 1;
      if (d.x > 1) d.x -= 1;
      const x = c.width * (home ? 0.36 + d.x * 0.62 : 0.55 + d.x * 0.45) + dx * 0.6;
      const y = c.height * (0.06 + d.y * 0.84) + dy * 0.4;
      ctx.fillStyle = `rgba(255,236,200,${d.a})`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(loop);
  };
  loop();
})();
