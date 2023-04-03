const productos = document.getElementById('producto');

marcas.addEventListener("change", function(event){
    const tipoMarca = event.target.value;
    const tipoAnimal = animal.value;
    fetch("/venta/productos/"+ tipoAnimal + "/" + tipoMarca)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            productos.innerHTML = "<option value=''>Seleccionar producto</option>";

            data.forEach(function(producto) {
                const option = document.createElement("option");
                option.value = producto.id;
                option.textContent = producto.producto;
                productos.appendChild(option);
              });
            })
            .catch(function(error) {
              console.error("Error al cargar los productos:", error);
            });

            productos.disabled = false;
    });
