# NOIR — Premium Photography Portfolio

## Ważne: jak wrzucić na GitHub
To jest **zwykła statyczna strona HTML/CSS/JS**. Nie wymaga Node.js, npm ani żadnego buildu.

### Opcja A — GitHub przez przeglądarkę
1. Utwórz nowe repozytorium, np. `noir-portfolio`.
2. Otwórz repozytorium.
3. Kliknij **Add file → Upload files**.
4. Wgraj **zawartość folderu `noir-studio-v2`**, czyli:
   - `index.html`
   - `styles.css`
   - `script.js`
   - folder `images`
   - `README.md`
5. Kliknij **Commit changes**.
6. Wejdź w **Settings → Pages**.
7. W `Build and deployment` wybierz **Deploy from a branch**.
8. Branch: `main`, folder: `/ (root)`.
9. Save.

### Opcja B — Git
```bash
git init
git add .
git commit -m "Create premium photography portfolio"
git branch -M main
git remote add origin TWOJ_ADRES_REPO
git push -u origin main
```

Potem w GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Dostosowanie strony

### 1. Nazwa
W `index.html` wyszukaj `NOIR` i zamień na swoją markę.

### 2. O mnie
W sekcji `about` zamień:
- `Twoje Imię`
- opis
- `08+`
- `240+`
- `17`

### 3. Kontakt
Zmień `hello@twojadomena.pl` na swój e-mail.

Zmień również linki:
- `https://www.instagram.com/`
- `https://www.facebook.com/`

### 4. Zdjęcia
Galeria jest w `script.js` w tablicy `photos`.

Możesz użyć lokalnych zdjęć:
```js
{s:"images/portret-01.jpg",t:"Nazwa zdjęcia",c:"portrait"}
```

i wrzucić plik do folderu `images`.

Dostępne kategorie:
- `portrait`
- `fashion`
- `wedding`
- `automotive`

## Co jest już gotowe
- premium dark art direction
- animowane białe light-streaks w tle
- kursor-aparat
- magnetyczne przyciski
- rozbudowane pełnoekranowe menu
- osobna sekcja portfolio
- filtrowanie kategorii
- asymetryczny editorial grid
- LED/glow za zdjęciami
- fullscreen lightbox
- nawigacja poprzednie/następne zdjęcie
- keyboard arrows + Escape
- Selected Stories / Journal
- About
- Contact
- responsywność
- GitHub Pages bez buildu

## Uwaga o zdjęciach demo
Domyślne zdjęcia są pobierane z Unsplash. Do publikacji portfolio najlepiej podmienić je na własne zdjęcia w folderze `images`.
