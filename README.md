# defter

Kişisel site: CV, teknik yazı, seçilmiş işler. Tema gece; lamba durur.

**[yunusemredurak.com.tr](https://yunusemredurak.com.tr)**

Yunus Emre Durak — 2026 mezunu yazılım mühendisi, İzmir. Düz HTML, bir stil dosyası, bir script. Derleme yok.

## Sayfalar

| | |
|---|---|
| [Ana](https://yunusemredurak.com.tr) | Kendini tanıtma. |
| [Yazılar](https://yunusemredurak.com.tr/defter.html) | Teknik notlar. |
| [İşler](https://yunusemredurak.com.tr/isler.html) | Seçilmiş işler ve staj. |
| [Hakkında](https://yunusemredurak.com.tr/hakkinda.html) | Yol, iş, eğitim. |

Edebi / uhrevi denemeler nav’da yok. Footer’daki *kenar* ile açılır; indekslenmez.

## Yerel önizleme

```bash
python3 -m http.server 8080
```

Yayın GitHub Pages. Alan adı [`CNAME`](CNAME) dosyasında.

## Yapı

```
index.html
defter.html         teknik yazılar
isler.html
hakkinda.html
yazilar.html        kenar (edebi, noindex)
styles.css
site.js
assets/hero.jpg
CNAME
```

Masaüstünde imleç alev; ışık konisi fareyi izler. Lamba gövdesine tıklanınca alev yükselir. `prefers-reduced-motion` varsa animasyon durur.
