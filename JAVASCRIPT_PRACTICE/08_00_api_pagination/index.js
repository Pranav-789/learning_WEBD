const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const products = await response.json();

    return products;
}

const mainContainer = document.querySelector(".mainContainer");



const showProducts = async () => {
    const prods = await getProducts();
    console.log(prods);

    for (let i = 0; i < prods.length; i++) {
      const productDiv = document.createElement("div");
      productDiv.innerText = `${prods[i].title}`;
      mainContainer.appendChild(productDiv);
    }
}

showProducts();