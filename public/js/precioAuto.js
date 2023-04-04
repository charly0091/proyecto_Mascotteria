const precioInput = document.getElementById('precio');
const cantidadInput = document.getElementById('cantidad');
const tipoInput = document.getElementById('tipo');


productos.addEventListener("change", function(event){
    const productoFiltrado = event.target.value;
    fetch("/venta/producto/" + productoFiltrado)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if(tipoInput.value == "suelto"){
                precioInput.addEventListener("change", function(event){
                    cantidadInput.value = event.target.value / data.precioKg;
                    cantidadInput.value = parseFloat(cantidadInput.value).toFixed(2);
                })
                cantidadInput.addEventListener("change", function(event){
                    precioInput.value = event.target.value * data.precioKg;
                })
            } else if(tipoInput.value == "bolsa") {
                precioInput.addEventListener("change", function(event){
                    cantidadInput.value = event.target.value / data.precioBolsa;
                    cantidadInput.value = parseFloat(cantidadInput.value).toFixed(2);
                })
                cantidadInput.addEventListener("change", function(event){
                    precioInput.value = event.target.value * data.precioBolsa;
                })
            }
        })
            .catch(function(error) {
              console.error("Error al cargar los productos:", error);
            });

          
    });
