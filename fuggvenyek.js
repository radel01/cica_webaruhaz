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

  let kosarItems = {
    kep: `<img src="${termekekLISTA[id].kep}" class="kosarKep" alt="kep" `,
    nev: termekekLISTA[id].nev,
    ar: termekekLISTA[id].ar + ",-Ft",
    db:1
  };
  console.log(kosarItems.db)
  let index = 0;
  while (
    index < kosarLISTA.length &&
    kosarItems.nev !== kosarLISTA[index].nev
  ) {
    index++;
  }
  if (index < kosarLISTA.length) {
    kosarItems.db+=1
    console.log(kosarItems.db)
  } else {
    kosarItems.db = 1;
    kosarLISTA.push(kosarItems);
  }

}


export function kosarOsszeallit(lista) {
  console.log(lista);
  let txt= "<h1>Kosár</h1>"
  txt += "<table class = 'table'>";
  txt += "<h4>Kosár tartalma</h4>";
  txt += `<tbody>`;
  let osszeg=0;
  lista.forEach((element, index) => {
    txt += `<tr>`;
    for (const key in element) {
      if (key != "db") {
        txt += `<td class="kosarOszlop">${element[key]}</td>`;
      }
      if (key === "ar") {
        osszeg += parseInt((element[key])*(element.db));
      }
    }
    txt += `<td><input type="number" id="A${index}" class="quantity" name="quantity" min="1" max="50" class="darabInput" value="${element.db}" ></td>`;
    txt += `<td> <button id = "${index}" type="button" class="torolGomb" ><img src="kepek/kuka.png" alt="kuka" style="width: 40px" /></button></td>`;
    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  txt += `<h2 class="vegosszeg" >Végösszeg: ${osszeg} Ft</h2>`;
  txt += `<button class="vasarlasGomb btn btn-secondary" type="button">Vásárlás</button>`
  console.log(osszeg)
  return txt;
}



export function torol(kosarLISTA, id) {
  kosarLISTA.splice(id, 1);
}

export function adatlapOsszeallit() {
  let osszeg=0;
  let txt = "<form>";
  txt += "<h4>Vásárlói adatok</h4>";
  txt += `<input type="text" class="form-control" placeholder="Név">`
  txt += `<input type="text" class="form-control" placeholder="E-mail">`
  txt += `<input type="text" class="form-control" placeholder="Telefonszám">`
  txt += "<h4>Szállítási cím</h4>";
  txt += `<input type="text" class="form-control" placeholder="Irányítószám">`
  txt += `<input type="text" class="form-control" placeholder="Város">`
  txt += `<input type="text" class="form-control" placeholder="Utca, házszám">`
  txt += `<input type="text" class="form-control" placeholder="Emelet, ajtó">`
  txt += "<h4>Számlázási cím</h4>";
  txt += `  <label for="cim">Ugyan az, mint a szállítási cím</label><br>
  <input type="checkbox" id="cimCheckBox" name="cim" value="cim" checked>`
  let cimCheckBox=$("#cimCheckBox")
  txt+=`<div id="szamlazas"><input type="text" class="form-control" placeholder="Irányítószám">
  <input type="text" class="form-control" placeholder="Város">
  <input type="text" class="form-control" placeholder="Utca, házszám">
  <input type="text" class="form-control" placeholder="Emelet, ajtó"></div>`
  let szamlazasDiv=$("#szamlazas")
  cimCheckBox.on("change", function(){
    if (this.checked == true){
      szamlazasDiv.hide()
    }else{
      szamlazasDiv.show()
    }
  })
  txt += "</form>";
  txt += `<h2 class="vegosszeg" >Végösszeg: ${osszeg} Ft</h2>`;
  txt += `<button class="rendelesGomb btn btn-secondary" type="button">Rendelés leadása</button>`
  return txt;
}