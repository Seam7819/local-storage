const handleBtn = () => {
    const inputField = document.getElementById('input-field');
    const product = inputField.value;
    const quantityField = document.getElementById('quantity-field');
    const quantity = quantityField.value;
    quantityField.value = '';
    inputField.value = '';
    console.log(product,quantity);
    displayProduct(product,quantity);
    saveLocalStorage(product,quantity)
}

const displayProduct = (product,quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}

const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveLocalStorage = (product,quantity) =>{
    const cart = getStoredCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
    const products = getStoredCart()
    console.log(products);
    for(const product in products){
        const quantity = products[product];
        displayProduct(product,quantity)
    }
}

displayProductFromLocalStorage()