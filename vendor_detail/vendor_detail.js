import { logout, fetchProducts, fetchVendorDetails } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

fetchProducts(1);
fetchVendorDetails(1);
