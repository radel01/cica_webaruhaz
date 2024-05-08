import { termekekLISTA } from "./adat.js";
import { szuresNevSzerint } from "./adatKezelo.js";
import { listaRendez } from "./adatKezelo.js";
import { listaRendezSzam } from "./adatKezelo.js";
import { kartyaOsszeallit, kosarOsszeallit, kosarbaRak, torol } from "./fuggvenyek.js";


let articleELEM = $(".article");
let tablazatELEM = $(".tablazat")
let kosarLISTA=[];

export function megjelenit(txt, hol) {
  hol.html(txt);
}

init(termekekLISTA, kosarLISTA);

export function init(termekekLISTA, kosarLISTA) {
  megjelenit(kartyaOsszeallit(termekekLISTA), articleELEM);
  kosarbaRakEsemeny(termekekLISTA)
  torolEsemeny()
  megjelenit(kosarOsszeallit(kosarLISTA), tablazatELEM);
}


RendezEsemeny();
szuresEsemeny();

function szuresEsemeny() {
  const keresoELEM = $("#kereso");

  keresoELEM.on("keyup", function () {
    let szurtSzoveg = keresoELEM.val();
    const SZURTLiSTA = szuresNevSzerint(termekekLISTA, szurtSzoveg);
    init(SZURTLiSTA);
  });
}
init(termekekLISTA, kosarLISTA);

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


export function kosarbaRakEsemeny(termekekLISTA){
  let kosarbaGombELEM=$(".kosarbaGomb")
  kosarbaGombELEM.on("click", function(event){
    let id=event.target.id.replace("k", "")
    kosarbaRak(termekekLISTA, kosarLISTA, id)
    init(termekekLISTA, kosarLISTA)
  })
  return kosarLISTA
}

export function torolEsemeny(){
  let torolGombELEM=$(".torlesGomb")
  torolGombELEM.on("click", function(event){
    let id=event.target.id
    torol(kosarLISTA, id)
    init(termekekLISTA, kosarLISTA)
    console.log("gomb")
  });
}