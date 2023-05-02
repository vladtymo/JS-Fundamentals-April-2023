// ------------ get form by name
const form = document.forms.createForm;
console.log(form);

// ------------ get form control by name
const modelInput = form.elements.model;
const priceInput = form.elements.price;
const inStock = form.elements.inStock;

console.log("Model input:", modelInput);
console.log("Price input:", priceInput);

// ------------ get input value
console.log("Model:", modelInput.value);
console.log("Price:", priceInput.value);
console.log("In Stock:", inStock.checked);

// ------------ set click event handler on submit button
class Product {
    static count = 1;

    constructor(model, price, inStock) {
        this.model = model;
        this.price = price;
        this.inStock = inStock;
        this.id = Product.count++;
    }

    get htmlId() {
        return `product-${this.id}`;
    }
}

createForm.onsubmit = (event) => {
    event.preventDefault(); // disable default logic

    const newProduct = new Product(modelInput.value, priceInput.value, inStock.checked);

    addProductToTable(newProduct);
}

// add product to the table
function addProductToTable(product) {
    //const tableBody = document.getElementById('product-table-body');
    // we can use element by ID as a variable
    tableBody.innerHTML += `<tr id=${product.htmlId}>
                                <th scope="row">${product.id}</th>
                                <td>${product.model}</td>
                                <td>${product.price}$</td>
                                <td>${product.inStock ? 'In Stock' : 'Out of Stock'}</td>
                                <td><button onclick="removeProduct('${product.htmlId}')" type="button" class="btn btn-danger">Remove</button></td>
                            </tr>`;
}

// remove product from table by ID
function removeProduct(id) {
    let item = document.getElementById(id);
    item.remove();
}
