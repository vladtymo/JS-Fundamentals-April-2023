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
createForm.onsubmit = (event) => {
    event.preventDefault(); // disable default logic

    const newProduct = {
        id: 123,
        model: modelInput.value,
        price: priceInput.value,
        inStock: inStock.checked
    };

    addProductToTable(newProduct);
}

// add product to the table
function addProductToTable(product) {
    //const tableBody = document.getElementById('product-table-body');
    // we can use element by ID as a variable
    tableBody.innerHTML += `<tr>
                                <th scope="row">${123}</th>
                                <td>${product.model}</td>
                                <td>${product.price}$</td>
                                <td>${product.inStock ? 'In Stock' : 'Out of Stock'}</td>
                            </tr>`;
}
