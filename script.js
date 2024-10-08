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

