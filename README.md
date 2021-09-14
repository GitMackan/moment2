# Beskrivningar 
## Automatisering
Automatiserings-processens syfte är att förenkla arbetet genom att automatisera olika områden. Alltså att slippa göra saker manuellt varje gång.
Exempel på saker man kan automatisera kan vara:
* Slå ihop olika CSS/Javascript-filer till en och samma och minifiera denna fil.
* Komprimera bilder
* Kopiera ändrade källkodsfiler till en publiceringsmapp

## Paket
I denna uppgift har jag valt paketen:
* Browser-sync - För att enkelt se mina ändringar jag gjort direkt i webbläsaren utan att behöva ladda om eller uppdatera sidan. 
* Gulp-concat - För att slå ihop olika filer till en och samma fil.
* Gulp-cssnano - För att minifiera min ihopslagna CSS-fil.
* Gulp-imagemin - För att automatisera komprimeringen av mina bilder.
* Gulp-terser - För att minifiera mina JavaScript-filer.

## Mitt system
Systemet som jag har gjort i mitt projekt fungerar såhär:
Olika sökvägar har skapats i form av en array. Dessa sökvägar letar efter HTML, CSS, JavaScript samt Bild-filer och kommer användas i olika tasks som jag gjort. Jag har även skapat en exports.default-funktion som gör att jag kan skriva gulp i min terminal så kör den en serie av tasks som jag lagt in. 

### Tasks
De tasks som jag har är:
* copyHTML - Den kopierar över alla mina HTML-filer till en vald mapp.
* cssTask - Denna task slår dels ihop alla mina css-filer till en och samma fil, och den minifierar också den slutliga filen. Den kopierar även över den till en vald publiceringsmapp.
* jsTask - Gör samma sak som tasken ovan fast med mina JavaScript-filer. Den slår ihop filer om det finns flera, minifierar filen och kopierar över den till vald mapp.
* watchTask - Denna task håller koll på mina sökvägar och ser om det görs några ändringar i nån fil. Om det görs någon ändring så körs mina tasks igen och uppdaterar automatiskt mina filer i publiceringsmappen. Denna task har även en funktion som heter Browser-sync, som gör att min sida visas i webbläsaren och uppdaterar automatiskt hemsidan om det görs någon ändring. 

