import { logout, fetchProducts, fetchVendorDetails } from '../fetch-utils.js';
import { renderVendorDetail } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const params = new URLSearchParams(window.location.search);
const vendorContainer = document.getElementById('vendor-container');

logoutButton.addEventListener('click', () => {
    logout();
});

export async function displayDetails() {
    // const id = +params.get('id');
    const vendor = await fetchVendorDetails(params.get('id'));
    vendorContainer.append(renderVendorDetail(vendor));
}

displayDetails();
