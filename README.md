# Műveletek listákkal
## specifikáció
A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
1. Lehet, hogy szükséged lesz a localStorage használatára. 
2. Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
3. Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Függvények:
### fuggvenyek.js
1. kosarbaRak(termekekLISTA, kosarLISTA, id): feltolti a kosárlistát, akkor fut le, ha a kosárba gombra nyomunk
2. kartyaOsszeallit(termekekLISTA): visszatérési értéke String típusú txt, kartyaDiv-et állítja össze
3. kosarOsszeallit(lista): visszatérési értéke String típusú txt, kosár htmljét állítja össze
4. torol(kosarLISTA, id): lista id-adik elemét splice-al leszedi, akkor fut le, ha a kuka gombra kattintunk
5. adatlapOsszeallit(): visszatérési értéke String típusú txt, űrlap html-t állítja össze
6. vegOsszeg(lista):beszorozza az adott elem árát a darabszámával, visszatérési értéke int típusú osszeg, akkor fut le, ha a kosárba gomra kattintunk(kosárba helyezünk egy terméket), illetve, ha a vásárlás gombra kattintunk
### listaMegjelenit.js
7. megjelenit(txt, hol): String típusú szöveget jelenít meg abban az elemben, ami paraméterének meg van adva
8. init(termekekLISTA, kosarLISTA): folyamatosan futtatja azokat a függvényeket, amik a html-hez nyúlnak hozzá
9. szuresEsemeny(): a keresősáv keyup eseményére ráteszi a szuresNevSzerint(...) függvényt, az init(...) függvénybe van meghívva
10. RendezEsemeny(): a megfelelő rendezési elemek kattintás eseményére ráteszi a hozzájuk tartozó rendezési függvényt, visszatérési értéke nincs, az init(...) függvénybe van meghívva
11. kosarbaRakEsemeny(termekekLISTA, kosarLISTA):kosárba gomb kattintás eseményére ráteszi a kosárbarak(...) függvényt, és a végösszeget megjelenítő függvényt, visszatérési értéke lista
12. vasarlasEsemeny(): a vásárlás gomb kattintás eseményére ráteszi az adatlapot megjelenítő függvényt, illetve a checkbox change eseményére eltüntet/megjelenít egy divet, az init(...) függvénybe van meghívva
13. rendelesEsemeny():a rendelés gombra kattintás eseményére rátesz egy alert függvényt, akkor fut le, ha a vásárlás gombra kattintunk (akkor jön létre a rendelés gomb)
14. torolEsemeny(): a kuka gombra kattintás eseményére ráteszi a torol(...) függvényt, az init(...) függvénybe van meghívva
### adatKezelo.js
15. szuresNevSzerint(lista, szurtSzoveg): név, vagy szín szerint szűrt listát ad vissza, akkor fut le, ha a keresőbe elkezdünk gépelni
16. listaRendez(lista, irany):lerendezett listát ad vissza, a paraméterben megadott irányra, akkor fut le, ha az egyik rendezési opció elemére kattintunk
17. listaRendezSzam(lista, irany):lerendezett listát ad vissza, a paraméterben megadott irányra, akkor fut le, ha az egyik rendezési opció elemére kattintunk
