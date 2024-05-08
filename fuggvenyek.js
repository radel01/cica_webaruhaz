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
  let kosarItems={
    kep:termekekLISTA[id].kep,
    nev:termekekLISTA[id].nev,
    ar:termekekLISTA[id].ar+" ,-Ft"
  }
  kosarLISTA.push(kosarItems);
  console.log(kosarLISTA);
  console.log(id);
}

export function kosarOsszeallit(lista) {
  console.log(lista);
  let txt = "<table class = 'table'>";
  txt += "<h4>Kosár tartalma</h4>";
  txt += `<tbody>`;
  lista.forEach((element, index) => {
    txt += `<tr>`;
    for (const key in element) {
      txt += `<td>${element[key]}</td>`;
    }
    txt += `<td> <button id = "${index}" type="button" class="torlesGomb" ><img src="kepek/kuka.png" alt="kuka" style="width: 40px" /></button></td>`;
    txt += `</tr>`;
  });
  txt += "</tbody></table>";
  return txt;
}


export function torol(kosarLISTA, id) {
  kosarLISTA.splice(id, 1);
}
