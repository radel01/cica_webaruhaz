# Műveletek listákkal
## specifikáció
A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
1. Lehet, hogy szükséged lesz a localStorage használatára. 
2. Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
3. Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## függvények
1. kosarbaRak(termekekLISTA, kosarLISTA, id): 
2. kartyaOsszeallit(termekekLISTA): visszatérési értéke String típusú txt, kartyaDiv-et állítja össze
3. kosarOsszeallit(lista): visszatérési értéke String típusú txt
4. torol(kosarLISTA, id): 
5. adatlapOsszeallit(): visszatérési értéke String típusú txt
6. megjelenit(txt, hol):
7. init(termekekLISTA, kosarLISTA): 
8. szuresEsemeny(): 
9. RendezEsemeny():
10. kosarbaRakEsemeny(termekekLISTA, kosarLISTA): visszatérési értéke lista
11. vasarlasEsemeny():
12. vegOsszeg(lista): visszatérési értéke int típusú osszeg
13. rendelesEsemeny():
14. torolEsemeny(): 
