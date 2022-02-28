export function renderVendor(vendor) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('vendor');
    img.src = `./assets/${vendor.image}`;
    p.textContent = vendor.name;

    div.append(img, p);

    return div;
}