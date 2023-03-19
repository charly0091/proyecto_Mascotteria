    const { writeJson , readJson } = require('../../src/data');
    const producto = document.getElementById('producto');
    const nombre = document.getElementById('nombre');
    const animal = document.getElementById('animal');
    const productos = readJson('productsDataBase.json');

  producto.addEventListener('change', () => {

    const opciones = productos.filter(elemento => producto.value == elemento.producto && elemento.categoria == animal.value)
    .map(elemento => `<option value="${elemento.nombre}">${elemento.nombre}</option>`);
    
    // Actualiza el segundo select con las nuevas opciones
    nombre.innerHTML = opciones.join('');
    nombre.disabled = false;
  });