// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
var ul = document.createElement("ul");
countries.forEach(function (country) {
  var li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
var elementoEliminar = document.querySelector(".fn-remove-me");
if (elementoEliminar) {
  elementoEliminar.parentNode.removeChild(elementoEliminar);
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
var divPrintHere = document.querySelector("[data-function='printHere']");
var ulCars = document.createElement("ul");
cars.forEach(function (car) {
  var li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
});
divPrintHere.appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesWithImages = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
countriesWithImages.forEach(function (country) {
  var div = document.createElement("div");
  var h4 = document.createElement("h4");
  h4.textContent = country.title;
  var img = document.createElement("img");
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});
