import { termekekLISTA } from "./adat.js";

function kartyaOsszeallit(termekekLISTA) {
  let txt = "";
  for (let index = 0; index < termekekLISTA.length; index++) {
    txt += `<div class="card col-md-3" >
        <div class="card-body">
        <img class="card-img-top" src="${termekekLISTA[index].kep}" alt="Card image">
        <h4 class="card-title">${termekekLISTA[index].nev}</h4>
        <p class="card-text">${termekekLISTA[index].leiras}</p>
        <p class="card-text">${termekekLISTA[index].ar},-Ft</p>
        <a href="#" class="btn btn-dark">Kosárba</a>
        </div>
      </div>`;
  }
  return txt;
}

let articleELEM = $(".article");

articleELEM.html(kartyaOsszeallit(termekekLISTA));
