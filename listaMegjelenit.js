import { termekekLISTA } from "./adat.js";
import { szuresNevSzerint } from "./adatKezelo.js";
import { listaRendez } from "./adatKezelo.js";
import { listaRendezSzam } from "./adatKezelo.js";

function kartyaOsszeallit(termekekLISTA) {
  let txt = "";
  for (let index = 0; index < termekekLISTA.length; index++) {
    txt += `<div class="card col-md-3" >
        <div class="card-body">
        <img class="termekKep card-img-top" src="${termekekLISTA[index].kep}" alt="Card image">
        <h4 class="termekNev card-title">${termekekLISTA[index].nev}</h4>
        <p class="card-text">${termekekLISTA[index].leiras}</p>
        <p class="termekAr card-text">${termekekLISTA[index].ar},-Ft</p>
        <a href="#" class="kosarbaGomb btn btn-dark">Kosárba</a>
        </div>
      </div>`;
  }
  return txt;
}

let kosarbaGombELEM=$(".kosarbaGomb")
let termekKepELEM=$(".termekKep")
let termekArELEM=$(".termekAr")
let termekNevELEM=$(".termekNev")

/* let kivalasztottTermek;
kosarbaGombELEM.on("click", function(){
  let id=event.target.

  console.log(kivalasztottTermek)
})

let kosarLISTA={};
function kosarbaRak(obj, kosarLISTA){
  
  return kosarLISTA
}

function tablazatOsszeallit(kosarLISTA) {
  let txt = "";
  for (let index = 0; index < termekekLISTA.length; index++) {
    txt += `<tr>
    <td>${kosarLISTA[index]}</td>
    <td>${kosarLISTA[index+1]}</td>
    <td>${kosarLISTA[index+1]}</td>
  </tr>`
  }
  return txt;
} */

let articleELEM = $(".article");
let tablazatELEM = $(".tablazat")
export function megjelenit(txt) {
  articleELEM.html(txt);
}
init(termekekLISTA);
/* 
tablazatELEM.html(tablazatOsszeallit(kosarbaRak(kosarLISTA))) */
/* 
init(kosarLISTA) */
export function init(lista) {
  megjelenit(kartyaOsszeallit(lista));
  RendezEsemeny();
}

function szuresEsemeny() {
  const keresoELEM = $("#kereso");

  keresoELEM.on("keyup", function () {
    let szurtSzoveg = keresoELEM.val();
    const SZURTLiSTA = szuresNevSzerint(termekekLISTA, szurtSzoveg);
    init(SZURTLiSTA);
  });
}
szuresEsemeny();
init(termekekLISTA);

let irany = 1;
function RendezEsemeny() {
  const azELEM = $("#a-z");
  const zaELEM = $("#z-a");
  const novekvoELEM = $("#novekvo");
  const csokkenoELEM = $("#csokkeno");
  azELEM.on("click", function () {
    const lista = listaRendez(termekekLISTA, irany);
    init(lista);
  });
  zaELEM.on("click", function () {
    const lista = listaRendez(termekekLISTA, irany * -1);
    init(lista);
  });
  novekvoELEM.on("click", function () {
    const lista = listaRendezSzam(termekekLISTA, irany);
    init(lista);
  });
  csokkenoELEM.on("click", function () {
    const lista = listaRendezSzam(termekekLISTA, irany * -1);
    init(lista);
  });
}
