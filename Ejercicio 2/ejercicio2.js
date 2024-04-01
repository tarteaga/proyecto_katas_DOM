// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
var divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
var divConP = document.createElement("div");
var p = document.createElement("p");
p.textContent = "Soy un párrafo en un div dinámico!";
divConP.appendChild(p);
document.body.appendChild(divConP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
var divConParrafos = document.createElement("div");
for (var i = 0; i < 6; i++) {
  var p = document.createElement("p");
  p.textContent = "Párrafo " + (i + 1);
  divConParrafos.appendChild(p);
}
document.body.appendChild(divConParrafos);

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
var pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
var h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
var ul = document.createElement("ul");
apps.forEach(function (app) {
  var li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
var elementosEliminar = document.querySelectorAll(".fn-remove-me");
elementosEliminar.forEach(function (elemento) {
  elemento.parentNode.removeChild(elemento);
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
var divs = document.querySelectorAll("div");
var pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
divs[0].parentNode.insertBefore(pMedio, divs[1]);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
var divsInsertHere = document.querySelectorAll(".fn-insert-here");
divsInsertHere.forEach(function (div) {
  var pDentro = document.createElement("p");
  pDentro.textContent = "Voy dentro!";
  div.appendChild(pDentro);
});
