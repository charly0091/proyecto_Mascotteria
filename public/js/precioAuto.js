const precioInput = document.getElementById('precio');
const cantidadInput = document.getElementById('cantidad');
const tipoInput = document.getElementById('tipo');
let multiplicador;

tipoInput.addEventListener("change", function(event){
    if(event.target.value == "bolsa"){
         multiplicador = 1.3;
    } else if(event.target.value == "suelto"){
         multiplicador = 1.4;
    }
});

productos.addEventListener("change", function(event){
    const productoFiltrado = event.target.value;
    fetch("/venta/producto/" + productoFiltrado)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            precioInput.addEventListener("change", function(event){
                cantidadInput.value = event.target.value / data.precio / multiplicador;
            })
            cantidadInput.addEventListener("change", function(event){
                precioInput.value = event.target.value * data.precio * multiplicador;
            })
        })
            .catch(function(error) {
              console.error("Error al cargar los productos:", error);
            });
    });
