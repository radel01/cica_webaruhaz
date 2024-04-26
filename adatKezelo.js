export function szuresNevSzerint(lista, szurtSzoveg) {
  const SZURTLiSTA = lista.filter(function (elem) {
    let nevKeres = elem.nev.toUpperCase().includes(szurtSzoveg.toUpperCase());
    let szinKeres = elem.szin.toUpperCase().includes(szurtSzoveg.toUpperCase());
    return szinKeres || nevKeres;
  });
  return SZURTLiSTA;
}

export function listaRendez(lista, irany) {
  /* - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát */
  lista.sort(function (a, b) {
    return a.nev.toUpperCase() > b.nev.toUpperCase()
      ? 1 * irany
      : -1 * irany; /*  pozitív, vagy negatív érték kell */
  });
  return lista;
}

export function listaRendezSzam(lista, irany) {
  /* - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát */
  lista.sort(function (a, b) {
    return (a.ar - b.ar) * irany
  })
  return lista;
}