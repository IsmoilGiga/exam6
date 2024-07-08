let body = document.querySelector("body");
let products = document.querySelector(".products");
let input = document.querySelector("input");
let btn = document.querySelector("button");

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    .then((res) => res.json())
    .then((data) => {
        for (let product of data) {

            let box = document.createElement("div");
            let img = document.createElement("img");
            let name = document.createElement("h2");
            let price = document.createElement("p");


            box.classList.add("product");
            img.classList.add("product-img");
            name.classList.add("product-name");
            price.classList.add("product-price");

            img.src = product.pic;
            name.textContent = product.name;
            price.textContent = product.price;

            box.appendChild(img);
            box.appendChild(name);
            box.appendChild(price);

            products.appendChild(box);
        }
    });

btn.addEventListener("click", (event) => {
    event.preventDefault();

    let search = input.value;

    fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
        .then((res) => res.json())
        .then((data) => {
            let filteredData = data.filter((product) => product.name === search);
            let filteredProduct = filteredData[0];

            products.innerHTML = "";

            let box = document.createElement("div");
            let img = document.createElement("img");
            let name = document.createElement("h2");
            let price = document.createElement("p");


            box.classList.add("product");
            img.classList.add("product-img");
            name.classList.add("product-name");
            price.classList.add("product-price");

            img.src = filteredProduct.pic;
            name.textContent = filteredProduct.name;
            price.textContent = filteredProduct.price;

            box.appendChild(img);
            box.appendChild(name);
            box.appendChild(price);

            products.appendChild(box);
        });
});
