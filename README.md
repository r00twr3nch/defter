# defter

> Karanlıkta ölçülü çalışmak, doğru olanı sessizce inşa etmektir.

Kişisel site. Yazılım, siber, not. Gece yanan bir lamba.

**[yunusemredurak.com.tr](https://yunusemredurak.com.tr)**

---

Yunus Emre Durak — yazılım mühendisi, İzmir. Bu depo o sitenin kaynağı: düz HTML, bir stil dosyası, bir script. Derleme yok, çerçeve yok.

## Sayfalar

| | |
|---|---|
| [Ana](https://yunusemredurak.com.tr) | Giriş. Lamba, toz, gece. |
| [Defter](https://yunusemredurak.com.tr/defter.html) | Laboratuvar notları, kısa gözlemler. |
| [Yazılar](https://yunusemredurak.com.tr/yazilar.html) | Uzun form; edebi ve uhrevi. |
| [İşler](https://yunusemredurak.com.tr/isler.html) | Seçilmiş işler ve staj izi. |
| [Hakkında](https://yunusemredurak.com.tr/hakkinda.html) | Yol, iş, eğitim. |

## Yerel önizleme

```bash
python3 -m http.server 8080
```

[http://127.0.0.1:8080](http://127.0.0.1:8080)

Yayın GitHub Pages üzerinde. Alan adı [`CNAME`](CNAME) dosyasında.

## Yapı

```
index.html          ana sahne
defter.html
yazilar.html
isler.html
hakkinda.html
styles.css          oda, tipografi, ışık
site.js             toz, parallax, alev imleç, saat
assets/hero.jpg     lamba fotoğrafı
CNAME
```

Masaüstünde imleç küçük bir alev; ışık konisi sayfayı ısıtır. Lamba gövdesine tıklanınca alev yükselir, ay işaretine tıklanınca oda kararır. İstanbul saati altta durur. `prefers-reduced-motion` varsa animasyon durur.

---

Yazı ve notlar bu deftere düşer. Gürültü düşmez.
