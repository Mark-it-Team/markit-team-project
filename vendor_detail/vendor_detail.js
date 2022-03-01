import { logout, fetchProducts, fetchVendorDetails } from '../fetch-utils.js';
import { renderProduct, renderVendorDetail } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const params = new URLSearchParams(window.location.search);
const vendorContainer = document.getElementById('vendor-container');
const productContainer = document.getElementById('products-container');
const homeBtn = document.getElementById('home');

logoutButton.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    return (window.location.href = '../index.html');
});

export async function displayDetails() {
    const data = +params.get('id');
    const vendor = await fetchVendorDetails(data);
    vendorContainer.append(renderVendorDetail(vendor));

    const products = await fetchProducts(data);
    for (let product of products) {
        const productEl = renderProduct(product);
        productContainer.append(productEl);
    }
}

displayDetails();
