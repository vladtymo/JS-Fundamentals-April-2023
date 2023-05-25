// -------- get products from server
const api = 'https://dummyjson.com/products';

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // add products to list
        const products = data.products;
        addProducts(products);
    });

function addProducts(items) {
    const list = document.querySelector('.product-list');

    for (const i of items) {
        //list.innerHTML += `<li>${i.brand} ${i.title} : ${i.price}$</li>`;
        list.innerHTML += `<div class="col">
                                <div class="card h-100">
                                    <img src="${i.thumbnail}" class="card-img-top" alt="product image">
                                    <div class="card-body">
                                        <h5 class="card-title">${i.title}</h5>
                                        <p class="card-text">${i.brand} | ${i.price}$</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-outline-primary w-100">Buy Now</a>
                                    </div>
                                </div>
                            </div>`;
    }
}
