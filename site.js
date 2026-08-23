(() => {
  const c = document.getElementById("dust");
  if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = c.getContext("2d");
  const home = document.body.classList.contains("home");
  const n = innerWidth < 800 ? 22 : home ? 70 : 36;
  const dots = Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.4 + .2,
    s: Math.random() * .00032 + .00006,
    a: Math.random() * .42 + .08,
  }));
  const fit = () => { c.width = innerWidth; c.height = innerHeight; };
  addEventListener("resize", fit, { passive: true });
  fit();
  const tick = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    for (const d of dots) {
      d.y -= d.s;
      d.x += Math.sin(d.y * 16) * .00012;
      if (d.y < 0) { d.y = 1; d.x = Math.random(); }
      const x = c.width * (home ? 0.38 + d.x * 0.6 : 0.55 + d.x * 0.45);
      const y = c.height * (0.08 + d.y * 0.82);
      ctx.fillStyle = `rgba(255,236,200,${d.a})`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  };
  tick();
})();
