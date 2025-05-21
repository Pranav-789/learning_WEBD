document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });
  
  productList.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
      const productId = parseInt(e.target.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      
      addToCart(product)
    }
  });
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  renderCart(cart);

  function addToCart(product){
    cart.push(product);
    renderCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function renderCart(){
    cartItems.innerText = "";
    let totalPrice = 0;
    if(cart.length > 0){
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove('hidden');
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button class="del-item-fro-cart"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItem.classList.add('ctli');
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;

        const removeBtn = cartItem.querySelector(".del-item-fro-cart");
        removeBtn.addEventListener('click', (e)=>{
          e.stopPropagation();
          cart = cart.filter(it => it.id != item.id);
          localStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        })

      })
    }else{
      emptyCartMessage.classList.remove('hidden');
      totalPriceDisplay.textContent = `0.00`;
    }
  }

  

  checkOutBtn.addEventListener('click', () => {
    cart.length = 0;
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Checkout successed!");
    renderCart();
  })

});

//add remove btn
//add localStorage
