import { termekekLISTA } from "./adat.js";
import { szuresNevSzerint } from "./adatKezelo.js";
import { listaRendez } from "./adatKezelo.js";
import { listaRendezSzam } from "./adatKezelo.js";
import { adatlapOsszeallit, kartyaOsszeallit, kosarOsszeallit, kosarbaRak, torol } from "./fuggvenyek.js";


let articleELEM = $(".article");
let tablazatELEM = $(".tablazat")
let kosarLISTA=[];



export function megjelenit(txt, hol) {
  hol.html(txt);
}

init(termekekLISTA, kosarLISTA);

export function init(termekekLISTA, kosarLISTA) {
  megjelenit(kartyaOsszeallit(termekekLISTA), articleELEM);
  kosarbaRakEsemeny(termekekLISTA, kosarLISTA)
  megjelenit(kosarOsszeallit(kosarLISTA), tablazatELEM);
  torolEsemeny()
  vasarlasEsemeny()
  RendezEsemeny();
  szuresEsemeny();
  darabInputEsemeny();
}


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


export function kosarbaRakEsemeny(termekekLISTA, kosarLISTA){
  let kosarbaGombELEM=$(".kosarbaGomb")
  let darabELEM=$(".quantity")
  kosarbaGombELEM.on("click", function(event){
    let id=event.target.id.replace("k", "")
    let kosarId=event.target.id.replace("A", "")
    console.log(darabELEM.value)
    kosarbaRak(termekekLISTA, kosarLISTA, id)
/*     let osszeg=vegOsszeg(kosarLISTA); */
    init(termekekLISTA, kosarLISTA)
  })
  return kosarLISTA
}

export function vasarlasEsemeny(){
  let vasarlasGombELEM=$(".vasarlasGomb")
  vasarlasGombELEM.on("click", function(event){
    tablazatELEM.empty();
    megjelenit(adatlapOsszeallit(), tablazatELEM)
    let cimCheckBox=$("#cimCheckBox")
    let szamlazasDiv=$("#szamlazas")
  cimCheckBox.on("change", function(){
    if (this.checked == true){
      szamlazasDiv.hide()
    }else{
      szamlazasDiv.show()
    }
  })
    rendelesEsemeny()
  })
}

export function darabInputEsemeny(){
  let darab=$(".termekDarab")
  darab.on("change", function(event){
    let kosarId=event.target.id.replace("A", "")
    console.log("darabszám változás!"+event.target[kosarId])
  })
}

export function vegOsszeg(lista){
  let osszeg = 0;
  lista.forEach(element => {
        osszeg += element.ar*element.db;
  });
  return osszeg;
}

export function rendelesEsemeny(){
  let rendelesGombELEM=$('.rendelesGomb')
  rendelesGombELEM.on("click", function(event){
    window.alert("Rendelése sikeres volt!")
    console.log(alert)
  })
}

export function torolEsemeny(){
  let torolGombELEM=$(".torolGomb")
  torolGombELEM.on("click", function(event){
    let id=event.target.id
    torol(kosarLISTA, id)
    init(termekekLISTA, kosarLISTA)
  });
}