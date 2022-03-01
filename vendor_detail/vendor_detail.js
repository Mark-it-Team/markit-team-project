import { logout, fetchProducts } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

fetchProducts();
