import {
    logout,
    fetchProducts,
    fetchVendorDetails,
    addCart,
    getUser,
    fetchCartInfo,
} from '../fetch-utils.js';
import { renderProduct, renderVendorDetail } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const params = new URLSearchParams(window.location.search);
const vendorContainer = document.getElementById('vendor-container');
const productContainer = document.getElementById('products-container');
const homeBtn = document.getElementById('home');
const shoppingBtn = document.getElementById('shopping-button');

logoutButton.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    return (window.location.href = '../index.html');
});

shoppingBtn.addEventListener('click', () => {
    location.replace(`../reserved`);
});

export async function displayDetails() {
    const data = +params.get('id');
    const vendor = await fetchVendorDetails(data);
    vendorContainer.append(renderVendorDetail(vendor));

    const products = await fetchProducts(data);
    for (let product of products) {
        const productEl = renderProduct(product);
        productEl.addEventListener('click', async () => {
            const newItem = { customer_id: getUser().id, product_id: product.id };
            await addCart(newItem);
        });
        productContainer.append(productEl);
    }
}

displayDetails();
