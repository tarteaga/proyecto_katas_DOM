// Eliminar el elemento que tenga la clase .fn-remove-me
var elementoEliminar = document.querySelector(".fn-remove-me");
if (elementoEliminar) {
    elementoEliminar.parentNode.removeChild(elementoEliminar);
}
