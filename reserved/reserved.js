import { logout, 
    fetchCart,
    fetchVendors,
    deleteFromCart, 
    checkAuth } from '../fetch-utils.js';
import { renderCartItem } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const cartContainer = document.getElementById('cart-display');
const homeBtn = document.getElementById('home');

logoutButton.addEventListener('click', () => {
    logout();
});

homeBtn.addEventListener('click', () => {
    return (window.location.href = '../index.html');
});

checkAuth();

async function displayCart() {
    const vendors = await fetchVendors();
    cartContainer.textContent = '';
    for (let i = 1; i <= vendors.length; i++) {

        const vendorProducts = (await fetchCart(i));
        console.log(vendorProducts, i);

        for (let product of vendorProducts) {
            const item = product.products;
            if (item) {
                console.log(vendors[i - 1].name, 'name');
                break;
            }
        }

        for (let product of vendorProducts) {
            const item = product.products;
        
            if (item) {
                const itemEl = renderCartItem(item);
                itemEl.addEventListener('click', async () => {
                    await deleteFromCart(item.id);
                    displayCart();
                });
                cartContainer.append(itemEl);
            }
        }
    }
}

displayCart();