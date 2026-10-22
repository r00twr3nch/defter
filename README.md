# defter

A personal webpage for people who read by starlight.

The front of the site is a résumé. The background is a night sky: constellations drift as you scroll, a meteor crosses now and then, and one small figure — Delphinus, the dolphin — is a door. Find it, and the page opens onto Halvet, a quieter literary room that is not listed in the navigation.

**[yunusemredurak.com.tr](https://yunusemredurak.com.tr)**

## What is on the page

- A fixed canvas sky. Stars, a slow cloud, and stick-figure constellations drawn in the browser.
- Lyra, Orion, Scorpius, Cygnus, Aquila, Capricornus, Delphinus, Equuleus, Gemini, and the rest of the summer and autumn field.
- Occasional shooting stars. They stay out of the way of the text.
- On a phone the sky thins to four figures so the writing stays readable. Delphinus sits beside the name and pulses, so it is obvious that it can be tapped.
- Two languages, Turkish and English, switched in place.

## Rooms

```
index.html        the sky, and the résumé under it
hakkinda.html     a longer about
isler.html        selected work
yazilar/          technical writing
kenar/            Halvet — the literary room, reached through Delphinus
```

## Run it

No build step. Any static server in this folder is enough.

```bash
npx http-server . -p 8080 -c-1
```

Then open `http://127.0.0.1:8080`.

## Stack

Plain HTML, one stylesheet, one canvas script. Hosted on GitHub Pages. The domain is set in `CNAME`.
