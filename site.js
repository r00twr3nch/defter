(() => {
  const mime = window.LAMP_MIME || "image/jpeg";
  const src = window.LAMP_B64
    ? `data:${mime};base64,` + window.LAMP_B64
    : "assets/lamp.webp";
  document.querySelectorAll("[data-lamp]").forEach((el) => {
    el.src = src;
  });

  const c = document.getElementById("dust");
  if (!c || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = c.getContext("2d");
  const n = innerWidth < 800 ? 28 : 56;
  const dots = Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.35 + .25,
    s: Math.random() * .00028 + .00007,
    a: Math.random() * .38 + .07,
  }));
  const fit = () => { c.width = innerWidth; c.height = innerHeight; };
  addEventListener("resize", fit, { passive: true });
  fit();
  const tick = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    for (const d of dots) {
      d.y -= d.s;
      d.x += Math.sin(d.y * 14) * .00011;
      if (d.y < 0) d.y = 1;
      const x = c.width * (0.42 + d.x * 0.56);
      const y = c.height * (0.12 + d.y * 0.78);
      ctx.fillStyle = `rgba(239,232,220,${d.a})`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  };
  tick();
})();
