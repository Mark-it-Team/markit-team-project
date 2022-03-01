import { logout, fetchCart, fetchVendorDetails, fetchVendors } from '../fetch-utils.js';
import { renderProduct, renderCartItem } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const cartContainer = document.getElementById('cart-display');
const homeBtn = document.getElementById('home');

logoutButton.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    return (window.location.href = '../index.html');
});

const vendors = await fetchVendors();

for (let i = 1; i < vendors.length + 1; i++) {
    const vendorProducts = await fetchCart(i);
    for (let product of vendorProducts) {
        const item = product.products;
        if (item) {
            const itemEl = renderCartItem(item);
            cartContainer.append(itemEl);
        }
    }
}
