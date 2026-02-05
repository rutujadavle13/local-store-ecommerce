let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (document.getElementById("products")) {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      const productsDiv = document.getElementById("products");
      data.forEach((p) => {
        productsDiv.innerHTML += `
                    <div class="product">
                        <img src="${p.image}" width="100"/>
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                        <p>₹${p.price}</p>
                        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
                    </div>
                `;
      });
    });
}

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

if (document.getElementById("cartItems")) {
  const cartDiv = document.getElementById("cartItems");
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });
  cartDiv.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

function placeOrder() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: cart, totalAmount: total }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      localStorage.removeItem("cart");
      window.location.href = "index.html";
    });
}
