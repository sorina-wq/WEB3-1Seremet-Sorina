
let cart = [];

const cartButton = document.getElementById("cart-button");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");


// Deschide coșul
cartButton.addEventListener("click", () => {
  cartOverlay.classList.add("open");
});


// Închide coșul
closeCart.addEventListener("click", () => {
  cartOverlay.classList.remove("open");
});


// Închide coșul când dai click în afara lui
cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) {
    cartOverlay.classList.remove("open");
  }
});


// Adaugă produsul în coș
document.querySelectorAll(".add-button").forEach((button) => {

  button.addEventListener("click", () => {

    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    const existingProduct = cart.find(
      item => item.name === name
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        name: name,
        price: price,
        quantity: 1
      });
    }

    updateCart();

    cartOverlay.classList.add("open");
  });

});


// Actualizează coșul
function updateCart() {

  cartItems.innerHTML = "";

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Coșul este gol.
      </p>
    `;

    cartCount.textContent = "0";
    cartTotal.textContent = "0,00 lei";

    return;
  }


  let total = 0;
  let quantity = 0;


  cart.forEach((item, index) ) 
  }