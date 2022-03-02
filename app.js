import { fetchVendors, getUser, logout } from './fetch-utils.js';
import { renderVendor } from './render-utils.js';

const vendorContainer = document.getElementById('vendors-div');
const signUpButton = document.getElementById('sign-up-button');
const signInButton = document.getElementById('sign-in-button');
const logoutButton = document.getElementById('logout');
const shoppingBtn = document.getElementById('shopping-button');
const buttonsDiv = document.getElementById('buttons-div');

signUpButton.addEventListener('click', () => {
    location.replace(`./signup`);
});

signInButton.addEventListener('click', () => {
    location.replace(`./signin`);
});

shoppingBtn.addEventListener('click', () => {
    location.replace(`./reserved`);
});

if (!getUser()) {
    logoutButton.classList.add('hidden');
}

if (getUser()) {
    buttonsDiv.classList.add('hidden');
    console.log(getUser().aud);
}

export async function displayVendors() {
    const vendors = await fetchVendors();

    for (let vendor of vendors) {
        const vendorEl = renderVendor(vendor);
        vendorEl.addEventListener('click', () => {
            location.replace(`./vendor_detail/?id=${vendor.id}`);
        });
        vendorContainer.append(vendorEl);
    }
}

logoutButton.addEventListener('click', () => {
    logout();
});
displayVendors();
