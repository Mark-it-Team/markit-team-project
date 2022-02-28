import { fetchVendors } from './fetch-utils.js';
import { renderVendor } from './render-utils.js';

// fetchVendors();

const vendorContainer = document.getElementById('vendors-div');

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
displayVendors();


