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
    return div;
}

export function renderProduct(product) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const span = document.createElement('span');
    const p2 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('product');
    a.setAttribute('href', '#');
    a.classList.add('column');
    a.setAttribute('id', 'caption');
    span.classList.add('text');
    p2.textContent = product.description;
    img.src = `../assets/${product.image}`;
    p.textContent = product.name;
    span.append(p2);
    a.append(span, img);
    div.append(a, p);

    return div;
}

export function renderCartItem(item) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p2');

    div.classList.add('product-row');
    img.setAttribute('src', item.image);
    p1.textContent = item.name;
    p2.textContent = item.price;

    div.append(img, p1, p2);

    return div;
}
