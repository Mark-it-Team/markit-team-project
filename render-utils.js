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

export function renderVendorDetail(vendor) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('detail-container');
    h2.textContent = vendor.name;
    img.src = `../assets/${vendor.image}`;
    p.textContent = vendor.description;

    div.append(h2, img, p);
    return (div);
}

export function renderProduct(product) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('product');
    img.src = `../assets/${product.image}`;
    p.textContent = product.name;

    div.append(img, p);

    return div;
}