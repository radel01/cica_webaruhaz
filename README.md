# Műveletek listákkal
## specifikáció
A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
1. Lehet, hogy szükséged lesz a localStorage használatára. 
2. Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
3. Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## függvények
1. adatlista létrehozása (adat.js), termék neve, ára, kategória, kép, szín, méret
2. kartyaOsszeallit(): visszatérési értéke szöveg, kartyaDiv-et állítja össze (listaMegjelenit.js) 
3. szűrés (adatkezelo.js) kategória, szín, méret alapján
4. rendezés (adatkezelo.js) rendezni lehet név szerint:a-z, z-a, ár szerint:csökkenő, növekvő
5. keresés (adatkezelo.js) begépelt szóra szűrjük az összes olyan terméket, aminek címében, leírásában megtalálható
6. kosárba rakás 
7. kosarTablaOsszeallit()
8. megjelenit(mit, hova)
