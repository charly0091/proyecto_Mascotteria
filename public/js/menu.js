  const primero = document.getElementById('producto');
  const segundo = document.getElementById('nombre');


  
  primero.addEventListener('change', () => {
    const opciones = [];
    switch (primero.value) {
      case 'Agility':
        opciones.push('<option value="Kitten">Kitten</option>');
        opciones.push('<option value="Adulto">Adulto</option>');
        opciones.push('<option value="Urinary">Urinary</option>');
        opciones.push('<option value="Reduccion de peso">Reduccion de peso</option>');
        break;
      case 'Cat Chow':
        opciones.push('<option value="Gatitos Carne y Pollo">Gatitos Carne y Pollo</option>');
        opciones.push('<option value="Adulto Carne y Pollo">Adulto Carne y Pollo</option>');
        opciones.push('<option value="Adulto Pescado y Pollo">Adulto Pescado y Pollo</option>');
        break;
      case 'opcion3':
        opciones.push('<option value="opcion3a">Opción 3A</option>');
        opciones.push('<option value="opcion3b">Opción 3B</option>');
        opciones.push('<option value="opcion3c">Opción 3C</option>');
        opciones.push('<option value="opcion3d">Opción 3D</option>');
        break;
    }
    
    // Actualiza el segundo select con las nuevas opciones
    segundo.innerHTML = opciones.join('');
    segundo.disabled = false;
  });