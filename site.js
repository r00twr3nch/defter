(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine) document.body.classList.add("touch");

  const dict = {
    "Yazılım mühendisi, İzmir": "Software engineer, Izmir",
    "Yapay zekâ mühendisliği ve bilgi güvenliği. Yaşar Üniversitesi Yazılım Mühendisliği mezunu.": "AI engineering and information security. Software Engineering graduate, Yaşar University.",
    "Özgeçmiş": "Resume",
    "Yazılar": "Writing",
    "İşler": "Work",
    "Hakkında": "About",
    "Ana": "Home",
    "Gökyüzü": "Sky",
    "Hat": "Script",
    "Kalkan": "Shield",
    "Kod": "Code",
    "Orion bir pusula. Yıldız, takımyıldız, gök mekaniği.": "Orion is a compass. Stars, constellations, celestial mechanics.",
    "İman, geometri ve Kur’an. Tefekkür bir ölçü işidir.": "Faith, geometry, and the Quran. Reflection is a matter of measure.",
    "SIEM, pentest, tehdit modeli. Saldırı savunmayı öğretir.": "SIEM, pentest, threat models. Offense teaches defense.",
    "Dar API, okunabilir sistem, şaşırtmayan yazılım.": "Narrow APIs, readable systems, software that does not surprise.",
    "Deneyim": "Experience",
    "Eğitim": "Education",
    "Yazı": "Writing",
    "Seçilmiş işler": "Selected work",
    "Tümü": "All",
    "İletişim": "Contact",
    "Oca — Tem 2026": "Jan — Jul 2026",
    "Haz — Eyl 2025": "Jun — Sep 2025",
    "Haz — Ağu 2021": "Jun — Aug 2021",
    "Haz — Ağu 2020": "Jun — Aug 2020",
    "Haz — Ağu 2019": "Jun — Aug 2019",
    "Büyük dil modeli çıktılarının değerlendirilmesi; RAG, prompt tasarımı ve rubrik tabanlı kalite ölçümü.": "Evaluation of large language model outputs; RAG, prompt design, and rubric scoring.",
    "Tostbang Teknoloji, Diyarbakır": "Tostbang Teknoloji, Diyarbakir",
    "Backend geliştirme: REST API, veritabanı, performans ve kod incelemesi.": "Backend development: REST APIs, databases, performance, and code review.",
    "EFG Energy, Diyarbakır": "EFG Energy, Diyarbakir",
    "Ağ altyapısı, kamera güvenlik sistemleri ve masaüstü destek.": "Network infrastructure, camera security systems, and desktop support.",
    "Normsight Cyber Security, Diyarbakır": "Normsight Cyber Security, Diyarbakir",
    "E-ticaret uygulamalarında güvenlik denetimi; eklenti zafiyetleri ve ödeme süreçleri.": "Security review of e-commerce apps; plugin vulnerabilities and payment flows.",
    "3KCREATIVE, Diyarbakır": "3KCREATIVE, Diyarbakir",
    "HTML, CSS ve JavaScript ile arayüz; tema ve temel web güvenliği.": "Interfaces in HTML, CSS, and JavaScript; theming and basic web security.",
    "Yazılım Mühendisliği (İngilizce)": "Software Engineering (English)",
    "Yaşar Üniversitesi, İzmir": "Yaşar University, Izmir",
    "Vali Aydın Arslan Fen Lisesi": "Vali Aydın Arslan Science High School",
    "Örnek": "Sample",
    "Yer tutucu bir sahife. Asıl yazılar gelince bu satır kalkar.": "A placeholder page. This line goes when the real essays arrive.",
    "Gerçek zamanlı, gizli görev mekanikli çok oyunculu web oyunu.": "A real-time multiplayer web game with hidden-role mechanics.",
    "Gerçek zamanlı, gizli görev mekanikli çok oyunculu web oyunu. Oda açılır, roller gizlenir, tur bitene kadar kimse elini göstermez.": "A real-time multiplayer web game with hidden-role mechanics. A room opens, roles stay hidden, and nobody shows a hand until the round ends.",
    "Günlük kullanım için TypeScript yardımcı uygulaması.": "A TypeScript utility app for day-to-day use.",
    "C# ile geliştirilmiş taksi yönetim uygulaması.": "A taxi-management app written in C#.",
    "Lab ve staj": "Lab and internship",
    "MongoDB, PostgreSQL ve C# üzerine staj notları.": "Internship notes on MongoDB, PostgreSQL, and C#.",
    "Açık kaynak projeler ve staj döneminde üretilen işler.": "Open-source projects and work from internships.",
    "Tek bir örnek duruyor. Yeni yazılar buraya gelecek.": "One sample remains. New essays will land here.",
    "Örnek sahife": "Sample page",
    "Yazılım mühendisi. Yapay zekâ ve bilgi güvenliği. İzmir.": "Software engineer. AI and information security. Izmir.",
    "2026’da Yaşar Üniversitesi İngilizce Yazılım Mühendisliği programından mezun oldum. Çalışmalarım yapay zekâ mühendisliği ve bilgi güvenliği üzerine. İzmir’de yaşıyorum.": "I graduated in 2026 from Yaşar University, Software Engineering (English). I work on AI engineering and information security, and I live in Izmir.",
    "İş": "Work",
    "Oca 2026 — Tem 2026": "Jan 2026 — Jul 2026",
    "Haz 2025 — Eyl 2025": "Jun 2025 — Sep 2025",
    "Haz 2021 — Ağu 2021": "Jun 2021 — Aug 2021",
    "Haz 2020 — Ağu 2020": "Jun 2020 — Aug 2020",
    "Haz 2019 — Ağu 2019": "Jun 2019 — Aug 2019",
    "Eyl 2021 — Tem 2026": "Sep 2021 — Jul 2026",
    "Eyl 2017 — May 2021": "Sep 2017 — May 2021",
    "Diller": "Languages",
    "Türkçe": "Turkish",
    "ana dil": "native",
    "İngilizce": "English",
    "ileri": "advanced",
    "Almanca": "German",
    "temel": "basic",
    "İlgi": "Interests",
    "Astronomi": "Astronomy",
    "Yıldızlar, takımyıldızları, gök mekaniği. Orion bir pusula.": "Stars, constellations, celestial mechanics. Orion is a compass.",
    "İslam": "Islam",
    "İman, geometri, hat. Kur’an bir tefekkür kaynağı.": "Faith, geometry, calligraphy. The Quran as a source of reflection.",
    "Siber güvenlik": "Cybersecurity",
    "Saldırı savunmayı öğretir. SIEM, pentest, tehdit modelleme.": "Offense informs defense. SIEM, pentest, threat modeling.",
    "Yazılım": "Software",
    "Temiz API, okunabilir kod, şaşırtmayan sistemler.": "Clean APIs, readable code, systems that do not surprise.",
    "Sayfa yok.": "Page not found.",
    "Bu adres boş.": "This address is empty.",
    "Ana sayfa": "Home",
    "Zahirin öteki yüzü. Burada söz az, satır uzun durur.": "The other side of the visible. Here the word is few and the line is long.",
    "Zahirin öteki yüzü. Edebi ve uhrevi sahifeler.": "The other side of the visible. Literary and inward pages.",
  };

  const textNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p || ["SCRIPT", "STYLE"].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  };
  let originals = null;
  const applyLang = (lang) => {
    document.documentElement.lang = lang;
    if (!originals) originals = textNodes().map((n) => [n, n.nodeValue]);
    originals.forEach(([n, value]) => {
      if (lang === "tr") { n.nodeValue = value; return; }
      const key = value.trim();
      if (dict[key]) n.nodeValue = value.replace(key, dict[key]);
    });
    const btn = document.querySelector(".lang");
    if (btn) {
      btn.textContent = lang === "tr" ? "EN" : "TR";
      btn.setAttribute("aria-label", lang === "tr" ? "English" : "Türkçe");
    }
    localStorage.setItem("defter-lang", lang);
    tick();
  };
  document.querySelector(".lang")?.addEventListener("click", () => {
    applyLang(document.documentElement.lang === "en" ? "tr" : "en");
  });

  const tick = () => {
    const el = document.querySelector(".hour");
    if (!el) return;
    el.textContent = new Intl.DateTimeFormat(document.documentElement.lang === "en" ? "en-GB" : "tr-TR", {
      hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Europe/Istanbul"
    }).format(new Date());
  };
  tick();
  setInterval(tick, 20000);
  if (localStorage.getItem("defter-lang") === "en") applyLang("en");

  const top = document.querySelector(".top");
  const menu = document.querySelector(".menu");
  menu?.addEventListener("click", () => {
    const open = top.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  top?.querySelectorAll("nav a").forEach((a) => a.addEventListener("click", () => {
    top.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  }));
  addEventListener("scroll", () => top?.classList.toggle("scrolled", scrollY > 8), { passive: true });

  const cursor = document.querySelector(".cursor");
  if (cursor && fine && !reduce) {
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; });
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    };
    loop();
  }

  const canvas = document.getElementById("field");
  if (canvas && !reduce) {
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = 0, h = 0, mx = 0.62, my = 0.34, tx = mx, ty = my, sy = 0;
    const count = innerWidth < 800 ? 110 : 190;
    const stars = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.85 + 0.15,
      r: Math.random() * 1.15 + 0.25,
      p: Math.random() * Math.PI * 2,
      v: Math.random() * 0.000035 + 0.000012,
      gold: Math.random() < 0.08
    }));
    const cloud = [
      { n: 36, turn: 0.000042, depth: 0.26, band: [0.22, 0.42] },
      { n: 30, turn: -0.00006, depth: 0.52, band: [0.48, 0.74] },
      { n: 24, turn: 0.000084, depth: 0.82, band: [0.78, 1.08] }
    ].flatMap((layer) => Array.from({ length: layer.n }, () => ({
      a: Math.random() * Math.PI * 2,
      spread: layer.band[0] + Math.random() * (layer.band[1] - layer.band[0]),
      wobble: (Math.random() - 0.5) * 0.04,
      r: 0.85 + Math.random() * (0.7 + layer.depth * 0.8),
      turn: layer.turn * (0.9 + Math.random() * 0.2),
      depth: layer.depth,
      gold: Math.random() < 0.12
    })));
    const figures = [
      { name: "Lyra", at: [0.13, 0.30], scale: 0.13, depth: 0.72, stars: [[0.587, 0.325], [0.593, 0.08], [0.771, 0.177], [0.35, 0.41], [0.229, 0.92], [0.456, 0.842]], links: [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4], [4, 5], [5, 0]] },
      { name: "Cassiopeia", at: [0.86, 0.86], scale: 0.13, depth: 0.78, stars: [[0.08, 0.241], [0.267, 0.505], [0.511, 0.483], [0.664, 0.759], [0.92, 0.548]], links: [[0, 1], [1, 2], [2, 3], [3, 4]] },
      { name: "Cygnus", at: [0.14, 0.78], scale: 0.16, depth: 0.62, stars: [[0.134, 0.821], [0.332, 0.726], [0.503, 0.529], [0.727, 0.364], [0.787, 0.141], [0.841, 0.08], [0.397, 0.356], [0.673, 0.701], [0.866, 0.92]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [6, 2], [2, 7], [7, 8]] },
      { name: "Orion", at: [0.84, 0.30], scale: 0.30, depth: 0.34, stars: [[0.247, 0.232], [0.342, 0.08], [0.279, 0.083], [0.216, 0.247], [0.277, 0.377], [0.326, 0.442], [0.536, 0.473], [0.747, 0.364], [0.724, 0.603], [0.754, 0.582], [0.775, 0.492], [0.784, 0.453], [0.777, 0.398], [0.734, 0.269], [0.676, 0.216], [0.641, 0.211], [0.611, 0.881], [0.541, 0.72], [0.488, 0.661], [0.466, 0.371], [0.426, 0.707], [0.378, 0.92], [0.458, 0.686]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 9], [9, 10], [10, 11], [11, 12], [12, 7], [7, 13], [13, 14], [14, 15], [16, 17], [17, 18], [18, 6], [6, 19], [19, 5], [5, 20], [20, 21], [20, 22], [22, 18]] },
      { name: "Ursa Major", at: [0.50, 0.16], scale: 0.34, depth: 0.22, stars: [[0.362, 0.31], [0.547, 0.249], [0.549, 0.351], [0.402, 0.385], [0.263, 0.295], [0.187, 0.277], [0.08, 0.332], [0.404, 0.501], [0.472, 0.784], [0.472, 0.812], [0.516, 0.576], [0.682, 0.627], [0.698, 0.599], [0.743, 0.2], [0.882, 0.188], [0.722, 0.284], [0.74, 0.377], [0.804, 0.407], [0.92, 0.438], [0.913, 0.459]], links: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [5, 6], [3, 7], [7, 8], [8, 9], [7, 10], [10, 11], [10, 12], [1, 13], [13, 14], [14, 15], [15, 2], [2, 16], [16, 17], [17, 18], [19, 17]] },
      { name: "Scorpius", at: [0.86, 0.58], scale: 0.24, depth: 0.48, stars: [[0.906, 0.311], [0.905, 0.185], [0.87, 0.08], [0.726, 0.276], [0.658, 0.302], [0.604, 0.365], [0.49, 0.585], [0.478, 0.722], [0.461, 0.878], [0.345, 0.914], [0.178, 0.92], [0.094, 0.826], [0.123, 0.782], [0.176, 0.705]], links: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13]] },
      { name: "Aquila", at: [0.30, 0.72], scale: 0.16, depth: 0.66, stars: [[0.418, 0.227], [0.367, 0.305], [0.316, 0.416], [0.136, 0.739], [0.347, 0.659], [0.65, 0.564], [0.864, 0.08], [0.864, 0.92]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [1, 5], [5, 7]] },
      { name: "Pegasus", at: [0.28, 0.20], scale: 0.26, depth: 0.40, stars: [[0.744, 0.185], [0.581, 0.258], [0.473, 0.306], [0.15, 0.255], [0.08, 0.576], [0.458, 0.609], [0.56, 0.682], [0.59, 0.714], [0.774, 0.815], [0.92, 0.72], [0.544, 0.389], [0.562, 0.414], [0.773, 0.366], [0.889, 0.351]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [5, 2], [2, 10], [10, 11], [11, 12], [12, 13]] },
      { name: "Delphinus", at: [0.58, 0.46], scale: 0.14, depth: 0.92, stars: [[0.784, 0.92], [0.597, 0.347], [0.509, 0.118], [0.216, 0.08], [0.349, 0.264]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]] },
      { name: "Perseus", at: [0.40, 0.34], scale: 0.20, depth: 0.30, stars: [[0.224, 0.912], [0.15, 0.92], [0.126, 0.781], [0.147, 0.635], [0.238, 0.552], [0.264, 0.369], [0.302, 0.357], [0.374, 0.3], [0.477, 0.169], [0.541, 0.08], [0.535, 0.191], [0.461, 0.307], [0.467, 0.474], [0.481, 0.612], [0.462, 0.66], [0.505, 0.685], [0.547, 0.653], [0.538, 0.605], [0.137, 0.266], [0.08, 0.327], [0.112, 0.357], [0.604, 0.308], [0.92, 0.185]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 13], [18, 19], [19, 20], [20, 5], [11, 21], [21, 22]] },
      { name: "Andromeda", at: [0.66, 0.68], scale: 0.28, depth: 0.26, stars: [[0.08, 0.302], [0.309, 0.517], [0.466, 0.647], [0.638, 0.687], [0.358, 0.83], [0.417, 0.812], [0.469, 0.687], [0.48, 0.575], [0.753, 0.311], [0.92, 0.301], [0.739, 0.285], [0.742, 0.23], [0.381, 0.449], [0.419, 0.384], [0.341, 0.221], [0.228, 0.17], [0.706, 0.236]], links: [[0, 1], [1, 2], [2, 3], [4, 5], [5, 6], [6, 2], [2, 7], [7, 8], [8, 9], [8, 10], [10, 11], [1, 12], [12, 13], [13, 14], [14, 15], [10, 16]] },
      { name: "Gemini", at: [0.56, 0.58], scale: 0.18, depth: 0.56, stars: [[0.92, 0.483], [0.844, 0.488], [0.642, 0.39], [0.391, 0.181], [0.188, 0.106], [0.08, 0.258], [0.161, 0.311], [0.3, 0.52], [0.453, 0.581], [0.714, 0.748], [0.642, 0.894], [0.314, 0.745]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [7, 11]] },
      { name: "Leo", at: [0.10, 0.10], scale: 0.13, depth: 0.60, stars: [[0.783, 0.293], [0.786, 0.433], [0.697, 0.52], [0.328, 0.548], [0.08, 0.396], [0.319, 0.4], [0.716, 0.625], [0.87, 0.707], [0.92, 0.645]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [2, 6], [6, 7], [7, 8]] },
      { name: "Boötes", at: [0.66, 0.14], scale: 0.16, depth: 0.36, stars: [[0.719, 0.169], [0.679, 0.186], [0.568, 0.198], [0.484, 0.446], [0.484, 0.624], [0.357, 0.676], [0.281, 0.524], [0.417, 0.373], [0.43, 0.08], [0.547, 0.796], [0.553, 0.919], [0.512, 0.92]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 2], [2, 8], [4, 9], [9, 10], [10, 11], [11, 9]] }
    ];
    const lower = [
      { name: "Corona Borealis", at: [0.12, 0.08], scale: 0.16, depth: 0.86, stars: [[0.786, 0.805], [0.92, 0.55], [0.753, 0.271], [0.547, 0.22], [0.37, 0.195], [0.166, 0.292], [0.08, 0.637]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]] },
      { name: "Lepus", at: [0.38, 0.22], scale: 0.22, depth: 0.72, stars: [[0.08, 0.656], [0.216, 0.706], [0.351, 0.67], [0.552, 0.496], [0.83, 0.587], [0.92, 0.222], [0.613, 0.323], [0.392, 0.224], [0.297, 0.314], [0.831, 0.778], [0.74, 0.766]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [9, 4], [4, 10]] },
      { name: "Ursa Minor", at: [0.66, 0.10], scale: 0.18, depth: 0.80, stars: [[0.467, 0.342], [0.375, 0.257], [0.55, 0.08], [0.63, 0.199], [0.37, 0.545], [0.394, 0.753], [0.452, 0.92]], links: [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [5, 6]] },
      { name: "Cancer", at: [0.90, 0.28], scale: 0.17, depth: 0.84, stars: [[0.277, 0.192], [0.424, 0.463], [0.438, 0.606], [0.407, 0.92], [0.723, 0.08]], links: [[0, 1], [1, 2], [2, 3], [1, 4]] },
      { name: "Corvus", at: [0.18, 0.48], scale: 0.16, depth: 0.90, stars: [[0.803, 0.08], [0.767, 0.296], [0.636, 0.817], [0.292, 0.92], [0.197, 0.215]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]] },
      { name: "Sagitta", at: [0.50, 0.62], scale: 0.20, depth: 0.76, stars: [[0.92, 0.409], [0.59, 0.507], [0.08, 0.694], [0.878, 0.306]], links: [[0, 1], [1, 2], [3, 1]] },
      { name: "Libra", at: [0.80, 0.78], scale: 0.24, depth: 0.68, stars: [[0.588, 0.265], [0.728, 0.641], [0.47, 0.92], [0.285, 0.698], [0.284, 0.147], [0.272, 0.08]], links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 3]] }
    ];
    const size = () => {
      w = innerWidth;
      h = innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const track = () => { sy += (scrollY - sy) * 0.08; };
    size();
    addEventListener("resize", size);
    addEventListener("scroll", track, { passive: true });
    let px = -9999;
    let py = -9999;
    const delphinusPoints = () => {
      const figure = figures.find((item) => item.name === "Delphinus");
      const span = Math.min(w, h) * figure.scale;
      const ox = figure.at[0] * w + (mx - 0.5) * 22 * figure.depth;
      const oy = figure.at[1] * h + (my - 0.5) * 16 * figure.depth - sy * figure.depth * 0.22;
      return figure.stars.map(([x, y]) => ({
        x: ox + (x - 0.5) * span,
        y: oy + (y - 0.5) * span * 0.86
      }));
    };
    const home = location.pathname === "/";
    const overDelphinus = (x, y) => delphinusPoints().some((p) => Math.hypot(x - p.x, y - p.y) < 34);
    if (fine) {
      addEventListener("pointermove", (e) => {
        tx = e.clientX / Math.max(w, 1);
        ty = e.clientY / Math.max(h, 1);
        px = e.clientX;
        py = e.clientY;
        document.body.classList.toggle("on-delphinus", home && overDelphinus(px, py));
      }, { passive: true });
      addEventListener("pointerleave", () => {
        px = -9999;
        py = -9999;
        document.body.classList.remove("on-delphinus");
      });
      if (home) {
        addEventListener("pointerdown", (e) => {
          if (e.button !== 0 || !overDelphinus(e.clientX, e.clientY)) return;
          const under = document.elementFromPoint(e.clientX, e.clientY);
          if (under?.closest("a, button, input, textarea, select, label")) return;
          location.href = "/kenar/";
        });
      }
    }
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      frame += 0.012;
      mx += (tx - mx) * 0.04;
      my += (ty - my) * 0.04;
      sy += (scrollY - sy) * 0.08;
      const pts = stars.map((s) => {
        s.x += s.v * (0.35 + s.z);
        if (s.x > 1.04) s.x = -0.04;
        const parallax = (s.z - 0.5) * (fine ? 46 : 10);
        return {
          x: s.x * w + (mx - 0.5) * parallax,
          y: s.y * h + (my - 0.5) * parallax * 0.65 - sy * s.z * 0.18,
          s
        };
      });
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const reach = 78 + pts[i].s.z * 36;
        for (let j = i + 1; j < Math.min(pts.length, i + 9); j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < reach) {
            ctx.strokeStyle = `rgba(180, 198, 220, ${((reach - dist) / reach) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach(({ x: px, y: py, s }) => {
        const tw = 0.45 + Math.sin(frame * (0.6 + s.z) + s.p) * 0.55;
        ctx.fillStyle = s.gold
          ? `rgba(228, 194, 122, ${0.35 + tw * 0.55})`
          : `rgba(226, 232, 242, ${0.18 + tw * 0.55 * s.z})`;
        ctx.beginPath();
        ctx.arc(px, py, s.r * (0.7 + s.z * 0.6), 0, Math.PI * 2);
        ctx.fill();
      });

      const rx = Math.hypot(w, h) * 0.62;
      const ry = rx * 0.62;
      const ox = w * 0.5 + (mx - 0.5) * 18;
      const oy = h * 0.5 + (my - 0.5) * 12 - sy * 0.04;
      ctx.save();
      ctx.setLineDash([1.4, 11]);
      ctx.lineWidth = 0.7;
      [0.32, 0.6, 0.92].forEach((band, i) => {
        ctx.strokeStyle = `rgba(198, 214, 232, ${0.1 - i * 0.018})`;
        ctx.beginPath();
        ctx.ellipse(ox, oy, rx * band, ry * band, 0, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.restore();
      cloud.forEach((mote) => {
        mote.a += mote.turn;
        const px = ox + Math.cos(mote.a) * rx * mote.spread + (mx - 0.5) * 16 * mote.depth;
        const py = oy + Math.sin(mote.a) * ry * mote.spread + mote.wobble * ry + (my - 0.5) * 10 * mote.depth - sy * mote.depth * 0.12;
        const tw = 0.62 + Math.sin(frame * mote.depth + mote.a) * 0.38;
        ctx.fillStyle = mote.gold
          ? `rgba(228, 194, 122, ${0.42 + tw * 0.4})`
          : `rgba(236, 230, 214, ${(0.34 + mote.depth * 0.38) * tw})`;
        ctx.beginPath();
        ctx.arc(px, py, mote.r, 0, Math.PI * 2);
        ctx.fill();
      });

      const breathe = 1 + Math.sin(frame * 0.35) * 0.015;
      ctx.font = "italic 14px 'Instrument Serif', serif";
      const page = Math.max(document.documentElement.scrollHeight, h);
      [...lower].sort((a, b) => a.depth - b.depth).forEach((figure) => paint(figure, page, h * 0.55));
      [...figures].sort((a, b) => a.depth - b.depth).forEach((figure) => paint(figure, h));
      function paint(figure, field, origin = 0) {
        const depth = figure.depth;
        const span = Math.min(w, h) * figure.scale * breathe;
        const ox = figure.at[0] * w + (mx - 0.5) * 22 * depth;
        const oy = origin + figure.at[1] * (field - origin) + (my - 0.5) * 16 * depth - sy * depth * 0.22;
        const pts = figure.stars.map(([x, y]) => ({
          x: ox + (x - 0.5) * span,
          y: oy + (y - 0.5) * span * 0.86
        }));
        const haze = 0.42 + depth * 0.58;
        let near = 0;
        if (figure.name === "Delphinus") {
          let best = Infinity;
          pts.forEach((p) => { best = Math.min(best, Math.hypot(px - p.x, py - p.y)); });
          near = Math.max(0, Math.min(1, (150 - best) / 110));
        }
        const pulse = near > 0 ? 0.5 + Math.sin(frame * 2.4) * 0.5 : 0;
        const lit = near * (0.55 + pulse * 0.45);
        ctx.lineWidth = 1 + lit * 0.8;
        figure.links.forEach(([a, b], i) => {
          ctx.strokeStyle = lit
            ? `rgba(228, 194, 122, ${0.28 + lit * 0.62})`
            : `rgba(198, 214, 232, ${(0.07 + depth * 0.12) + Math.sin(frame * 0.5 + i) * 0.02})`;
          ctx.beginPath();
          ctx.moveTo(pts[a].x, pts[a].y);
          ctx.lineTo(pts[b].x, pts[b].y);
          ctx.stroke();
        });
        const glowR = 4 + depth * 4.5 + lit * 16;
        pts.forEach((p, i) => {
          const beat = lit ? 0.65 + Math.sin(frame * 2.4 + i * 0.7) * 0.35 : 1;
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
          glow.addColorStop(0, lit
            ? `rgba(255, 236, 186, ${0.55 + lit * 0.4 * beat})`
            : `rgba(244, 236, 220, ${0.42 + depth * 0.5})`);
          glow.addColorStop(1, "rgba(244, 236, 220, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
          ctx.fill();
          if (lit) {
            ctx.fillStyle = `rgba(255, 248, 230, ${0.7 + lit * 0.3 * beat})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.3 + lit * 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        ctx.fillStyle = lit
          ? `rgba(255, 226, 150, ${0.55 + lit * 0.45})`
          : `rgba(228, 194, 122, ${0.28 + haze * 0.32})`;
        if (!document.body.classList.contains("halvet")) {
          ctx.fillText(figure.name, pts[0].x + 10, pts[0].y - 6);
        }
      }
      requestAnimationFrame(draw);
    };
    draw();
  } else if (canvas) {
    canvas.remove();
  }

})();
