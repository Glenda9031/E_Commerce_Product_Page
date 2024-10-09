const sideBar = document.querySelector('[data-sidebar]');
const closeSideBar = document.querySelector('[data-closeSideBar]');
const openSideBar = document.querySelector('[data-openSideBar]');
const decrementBtn = document.querySelector('[data-decrementBtn]');
const incrementBtn = document.querySelector('[data-incrementBtn]');
const quantity = document.querySelector('[data-quantity]');
let actualValue = +quantity.innerText;
let price = document.querySelector('[data-price]');
let discount = document.querySelector('[data-discount]');

// Cart update
const cartQuantity = document.querySelector('[data-cartQuantity]');
const cartPrice = document.querySelector('[data-cartPrice]');

// Constant updating of the cart
const selectProduct = document.querySelector('[data-selectProduct]');
const noSelection = document.querySelector('[data-noSelection]');

openSideBar.addEventListener('click', (event) => {
    event.preventDefault();
    sideBar.classList.remove('d-none');
})

closeSideBar.addEventListener('click', (event) => {
    event.preventDefault();
    if (sideBar.classList.contains('d-block')) {
        sideBar.classList.remove('d-block');
    }
    sideBar.classList.add('d-none');
})

decrementBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (actualValue === 0) {
        actualValue = 0;
    } else {
        actualValue -= 1;
    } priceCalculator()
    quantity.innerText = actualValue
    cartQuantity.innerText = quantity.innerText;
    return
})

const addToCart = document.querySelector('[data-addToCart]');
totalItems = document.querySelector('[data-totalItems]')
addToCart.addEventListener('click', (event) => {
    event.preventDefault()
    totalItems.innerText = actualValue;
})

const priceCalculator = () => {
    if (actualValue === 0) {
        price.innerText = '$125.00'
        discount.innerText = '$250.00'
    } else {
        price.innerText = `$${actualValue * 125}.00`
        discount.innerText = `$${actualValue * 250}.00`
        cartPrice.innerText = price.innerText;
    }
    updateCart()
}

const updateCart = () => {
    if (actualValue > 0) {
        selectProduct.classList.remove('d-none');
        noSelection.classList.add('d-none');
    } else {
        selectProduct.classList.add('d-none');
        noSelection.classList.remove('d-none');
    }
}

const resetCart = document.querySelector('[data-resetCart]');
resetCart.addEventListener('click', (event) => {
    event.preventDefault()
    actualValue = 0;
    selectProduct.classList.add('d-none');
    noSelection.classList.remove('d-none');
    quantity.innerText = actualValue;
    totalItems.innerText = '0';
    price.innerText = '$125.00';
    discount.innerText = '$250.00';
})



