import { logout, fetchCart } from '../fetch-utils.js';
import { renderProduct } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const cartContainer = document.getElementById('cart-display');
const productContainer = document.getElementById('products-container');

logoutButton.addEventListener('click', () => {
    logout();
});

export async function displayCart() {
    const cart = await fetchCart();
    cartContainer.append(renderProduct(cart));

    const products = await fetchProducts();
    for (let product of products) {
        const productEl = renderProduct(product);
        productContainer.append(productEl);

        const i = await fetchItems();
        for (let item of items) {
            const itemEl = renderItems(item);
            productContainer.append(productEl);
        }
    }
}
displayCart();
