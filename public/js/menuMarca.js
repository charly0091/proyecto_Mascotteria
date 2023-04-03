const animal = document.getElementById('animal');
const marcas = document.getElementById('marca');

animal.addEventListener("change", function(event){
    const tipoAnimal = event.target.value;
    fetch("/venta/marcas/" + tipoAnimal)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            marcas.innerHTML = "<option value=''>Seleccionar marca</option>";

            data.forEach(function(marca) {
                const option = document.createElement("option");
                option.value = marca.marca;
                option.textContent = marca.marca;
                marcas.appendChild(option);
              });
            })
            .catch(function(error) {
              console.error("Error al cargar las marcas:", error);
            });

            marcas.disabled = false;
    });
