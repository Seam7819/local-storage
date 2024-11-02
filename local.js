const handleBtn = () => {
    const inputField = document.getElementById('input-field');
    const product = inputField.value;
    const quantityField = document.getElementById('quantity-field');
    const quantity = quantityField.value;
    quantityField.value = '' ;
    inputField.value = '' ;
    console.log(product,quantity);
}