// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  // Crear la lista ul
  var ul = document.createElement("ul");
  
  // Iterar sobre el array de albums y crear un elemento li para cada uno
  albums.forEach(function(album) {
      var li = document.createElement("li");
      li.textContent = album;
      ul.appendChild(li);
  });
  
  // Añadir la lista al cuerpo del documento HTML
  document.body.appendChild(ul);
  