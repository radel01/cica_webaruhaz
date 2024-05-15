import { termekekLISTA } from "./adat.js";
import { szuresNevSzerint } from "./adatKezelo.js";
import { listaRendez } from "./adatKezelo.js";
import { listaRendezSzam } from "./adatKezelo.js";
import { adatlapOsszeallit, kartyaOsszeallit, kosarOsszeallit, kosarbaRak, torol, vegOsszeg} from "./fuggvenyek.js";


let articleELEM = $(".article");
let tablazatELEM = $(".tablazat")
let kosarLISTA=[];
let osszeg=0;

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
}


function szuresEsemeny() {
  const keresoELEM = $("#kereso");

  keresoELEM.on("keyup", function () {
    let szurtSzoveg = keresoELEM.val();
    const SZURTLiSTA = szuresNevSzerint(termekekLISTA, szurtSzoveg);
    init(SZURTLiSTA, kosarLISTA);
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
    init(termekekLISTA, kosarLISTA);
  });
  zaELEM.on("click", function () {
    const lista = listaRendez(termekekLISTA, irany * -1);
    init(termekekLISTA, kosarLISTA);
  });
  novekvoELEM.on("click", function () {
    const lista = listaRendezSzam(termekekLISTA, irany);
    init(termekekLISTA, kosarLISTA);
  });
  csokkenoELEM.on("click", function () {
    const lista = listaRendezSzam(termekekLISTA, irany * -1);
    init(termekekLISTA, kosarLISTA);
  });
}


export function kosarbaRakEsemeny(termekekLISTA, kosarLISTA){
  let kosarbaGombELEM=$(".kosarbaGomb")
  let darabELEM=$(".quantity")
  kosarbaGombELEM.on("click", function(event){
    let id=event.target.id.replace("k", "")
    console.log(darabELEM.value)
    kosarbaRak(termekekLISTA, kosarLISTA, id)
    init(termekekLISTA, kosarLISTA)
    let vegOsszegElem=$(".vegOsszeg")
    osszeg=vegOsszeg(kosarLISTA)
    megjelenit(osszeg, vegOsszegElem)
  })
  return kosarLISTA
}

export function vasarlasEsemeny(){
  let vasarlasGombELEM=$(".vasarlasGomb")
  vasarlasGombELEM.on("click", function(event){
    tablazatELEM.empty();
    megjelenit(adatlapOsszeallit(), tablazatELEM)
    let vegOsszegElem=$(".vegOsszeg")
    osszeg=vegOsszeg(kosarLISTA)
    megjelenit(osszeg, vegOsszegElem)
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

/*     let nevInputELEM=$(".nev")
    let emailInputELEM=$(".email")
    let telefonInputELEM=$(".telefon")
    let zipInputELEM=$(".zip")
    let varosInputELEM=$(".varos")
    let utcaInputELEM=$(".utca")
    let hazszamInputELEM=$(".hazszam")
    let emeletInputELEM=$(".emelet")
    let zip2InputELEM=$(".zip2")
    let varos2InputELEM=$(".varos2")
    let utca2InputELEM=$(".utca2")
    let hazszam2InputELEM=$(".hazszam2")
    let emelet2InputELEM=$(".emelet2") */
export function rendelesEsemeny(){
  let rendelesGombELEM=$('.rendelesGomb')
  rendelesGombELEM.on("click", function(event){
/*     console.log(nevInputELEM.placeholder,nevInputELEM.val()) */
    window.alert("Rendelése sikeres volt!")
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