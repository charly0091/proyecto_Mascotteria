const inputFecha = document.getElementById('fecha');

const fechaActual = new Date();
const dia = ("0" + fechaActual.getDate()).slice(-2);
const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
const anio = fechaActual.getFullYear();
const fechaFormateada = `${anio}-${mes}-${dia}`;
inputFecha.value = fechaFormateada;
