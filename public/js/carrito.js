// Obtener los elementos HTML
const form = document.querySelector('form');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

let total = 0;
let cart = [];

// Agregar evento al botón "Agregar al carrito"
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const price = parseFloat(form.elements.price.value);
  const newItem = { name, price };
  cart.push(newItem);
  total += price;

  // Actualizar el carrito
  cartItems.innerHTML += `<li>${name} - $${price}</li>`;
  cartTotal.innerText = total.toFixed(2);

  // Limpiar el formulario
  form.reset();
});

// Agregar evento al botón "Realizar compra"
checkoutButton.addEventListener('click', () => {
  alert(`Compra realizada por un total de $${total.toFixed(2)}`);
  cart = [];
  total = 0;
  cartItems.innerHTML = '';
  cartTotal.innerText = total.toFixed(2);
});
