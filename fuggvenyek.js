export function kartyaOsszeallit(termekekLISTA) {
  let txt = "";
  for (let index = 0; index < termekekLISTA.length; index++) {
    txt += `<div class="card col-md-3" >
          <div class="card-body">
          <img class="termekKep card-img-top" src="${termekekLISTA[index].kep}" alt="Card image">
          <h4 class="termekNev card-title">${termekekLISTA[index].nev}</h4>
          <p class="termekAr card-text">${termekekLISTA[index].ar},-Ft</p>
          <a href="#" id="k${index}" class="kosarbaGomb btn btn-dark">Kosárba</a>
          </div>
        </div>`;
  }

  return txt;
}

export function kosarbaRak(termekekLISTA, kosarLISTA, id) {

  let kosarItem = {
    kep: `<img src="${termekekLISTA[id].kep}" class="kosarKep" alt="kep" `,
    nev: termekekLISTA[id].nev,
    ar: termekekLISTA[id].ar, 
  };
  console.log(kosarItem)
  let index = 0;
  while (
    index < kosarLISTA.length &&
    kosarItem.nev !== kosarLISTA[index].nev
  ) {
    index++;
  }
  if (index < kosarLISTA.length) {
    kosarLISTA[index].db+=1
    console.log(kosarItem.db)
  } else {
    kosarItem.db = 1;
    kosarLISTA.push(kosarItem);
  }

}


export function kosarOsszeallit(lista) {
  console.log(lista);
  let txt= "<h1>Kosár</h1>"
  txt += "<table class = 'table'>";
  txt += "<h4>Kosár tartalma</h4>";
  txt += `<tbody>`;
  lista.forEach((element, index) => {
    txt += `<tr>`;
    for (const key in element) {
      if (key != "db") {
        txt += `<td class="kosarOszlop">${element[key]}</td>`;
      }
/*       if (key === "ar") {
        osszeg += parseInt(element[key]*element.db);
      } */
    }
    txt += `<td><input type="number" id="A${index}" class="termekDarab quantity" name="quantity" min="1" max="50" class="darabInput" value="${element.db}" ></td>`;
    txt += `<td> <button id ="${index}" type="button" class="torolGomb" ><img src="kepek/kuka.png" alt="kuka" style="width: 40px" /></button></td>`;
    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  txt += `<div class="kosarVegosszegDiv"><h2 class="vegosszegText">Végösszeg:</h2><h2 class="vegOsszeg" ></h2><h2>Ft</h2></div>`;
  txt += `<button class="vasarlasGomb btn btn-secondary" type="button">Vásárlás</button>`
  return txt;
}



export function torol(kosarLISTA, id) {
  kosarLISTA.splice(id, 1);
}

export function adatlapOsszeallit() {
  let txt = "<form>";
  txt += "<h4>Vásárlói adatok</h4>";
  txt += `<input type="text" class="nev form-control" placeholder="Név">`
  txt += `<input type="text" class="email form-control" placeholder="E-mail">`
  txt += `<input type="text" class="telefon form-control" placeholder="Telefonszám">`
  txt += "<h4>Szállítási cím</h4>";
  txt += `<input type="text" class="zip form-control" placeholder="Irányítószám">`
  txt += `<input type="text" class="varos form-control" placeholder="Város">`
  txt += `<input type="text" class="hazszam form-control" placeholder="Utca, házszám">`
  txt += `<input type="text" class="emelet form-control" placeholder="Emelet, ajtó">`
  txt += "<h4>Számlázási cím</h4>";
  txt += `  <label for="cim">Ugyan az, mint a szállítási cím</label><br>
  <input type="checkbox" id="cimCheckBox" name="cim" value="cim" checked>`
  let cimCheckBox=$("#cimCheckBox")
  txt+=`<div id="szamlazas" style="display:none"><input type="text" class="zip2 form-control" placeholder="Irányítószám">
  <input type="text" class="varos2 form-control" placeholder="Város">
  <input type="text" class="utca2 form-control" placeholder="Utca, házszám">
  <input type="text" class="emelet2 form-control" placeholder="Emelet, ajtó"></div>`
  let szamlazasDiv=$("#szamlazas")
  cimCheckBox.on("change", function(){
    if (this.checked == true){
      szamlazasDiv.hide()
    }else{
      szamlazasDiv.show()
    }
  })
  txt += "</form>";
  txt += `<div class="kosarVegosszegDiv"><h2 class="vegosszegText">Végösszeg:</h2><h2 class="vegOsszeg" ></h2><h2>Ft</h2></div>`;
  txt += `<button class="rendelesGomb btn btn-secondary" type="button" onclick="location.href='index.html';">Rendelés leadása</button>`
  return txt;
}

export function vegOsszeg(lista){
  let osszeg = 0;
  let darab=$(".termekDarab")
  lista.forEach(element => {
    let darabInput=element.db;
/*     darab.on("change", function(event){
      let kosarId=event.target.id.replace("A", "")
      darabInput=darab[kosarId].value;
      if(element.db = darabInput){
        darabInput=element.db
      }
    }) */
      osszeg += parseInt(element.ar*darabInput);
    });
  return osszeg;
}