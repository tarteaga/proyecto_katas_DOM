// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
var btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click", function (event) {
  console.log("Se hizo clic en el botón:", event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
var inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", function () {
  console.log("Se enfocó en el input con valor:", inputFocus.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
var inputValue = document.querySelector(".value");
inputValue.addEventListener("input", function () {
  console.log("El valor del input cambió a:", inputValue.value);
});
