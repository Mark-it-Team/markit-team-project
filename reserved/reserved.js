import { logout, fetchCart, deleteFromCart, checkAuth } from '../fetch-utils.js';
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
    // as part of this request, i also join on the product and the vendor to each cart item
    const cart = await fetchCart();

    const vendors = {};
    // in this for loop I'm making a new object with a key for each vendor in my cart
    // this is what we mean by "data munging"
    // we're getting all the data we need from a single call to supabase, but its not in a very user
    // friendly format -- munging makes it more user friendly

    for (let item of cart) {
        const vendorName = item.products.vendors.name;
        vendors[vendorName]
            ? vendors[vendorName].push(item.products)
            : (vendors[vendorName] = [item.products]);
    }

    // after the above for loop, i have an object with all the cart items
    // organized by vendor
    console.log(vendors);

    cartContainer.textContent = '';
    // now i just loop through the vendors in the object and display all their items
    for (let vendor in vendors) {
        const vendorProducts = vendors[vendor];
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        div.classList.add('vendor-products-container');
        h2.textContent = vendor;
        div.append(h2);
        cartContainer.append(div);

        for (let item of vendorProducts) {
            const itemEl = renderCartItem(item);
            itemEl.addEventListener('click', async () => {
                await deleteFromCart(item.id);
                displayCart();
            });
            cartContainer.append(itemEl);
        }
    }
}

displayCart();
