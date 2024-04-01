// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Obtener el div con el atributo data-function="printHere"
var divPrintHere = document.querySelector("[data-function='printHere']");

// Crear la lista ul
var ul = document.createElement("ul");

// Iterar sobre el array de lugares y crear un elemento li para cada uno
places.forEach(function(place) {
    var li = document.createElement("li");
    li.textContent = place;
    ul.appendChild(li);
});

// Añadir la lista al div
divPrintHere.appendChild(ul);
