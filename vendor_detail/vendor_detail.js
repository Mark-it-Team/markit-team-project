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

if (!getUser()) {
    logoutButton.classList.add('hidden');
}

export async function displayDetails() {
    productContainer.textContent = '';
    vendorContainer.textContent = '';
    const data = +params.get('id');
    const vendor = await fetchVendorDetails(data);
    vendorContainer.append(renderVendorDetail(vendor));

    const products = await fetchProducts(data);
    for (let product of products) {
        const productEl = renderProduct(product);
        productEl.addEventListener('click', async () => {
            const newItem = { customer_id: getUser().id, product_id: product.id };
            await addCart(newItem);
            displayDetails();
        });
        const pId = { product_id: product.id };
        productContainer.append(productEl);
        const user = getUser();
        if (user) {
            await greyScale(productEl, pId);
        }
    }
}

displayDetails();

async function greyScale(el, productId) {
    const inCart = await fetchCartInfo(getUser().id);
    // console.log('1', bool);
    inCart.map(async (item) => {
        // const productIds = await fetchProductsByCart(item.product_id);
        // console.log(item, 'item');
        console.log('pid', productId.product_id);
        if (productId.product_id === item.product_id) {
            el.classList.add('in-cart');
        }
    });
}
