import { renderVendor, renderVendorDetail, renderProduct } from '../render-utils.js';

const test = QUnit.test;

const testVendor = {
    id: 1,
    created_at: '2022-02-28T18:49:26+00:00',
    name: 'OnlyPlants',
    description: "Portland's home for sexy plants since 2008. Come down and browse our selection of calatheas, dracaenas, and pothos. When you need a special plant, there's one place to go: OnlyPlants.",
    image: 'only_plants.jpg'
};

const testProduct = {
    id: 1,
    created_at: '2022-02-28T23:34:58+00:00',
    vendor_id: 1,
    name: 'Calathea',
    description: 'Calatheas are known for their beautiful foliage and tempermental personalities.',
    image: '../assets/plant1.jpg',
    price: '$200000000000000.00'
};

test('render vendor div should return a div for vendor', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<figure class="vendor-effect"><img src="./assets/only_plants.jpg"><figcaption><h2>OnlyPlants</h2><p>Portland's home for sexy plants since 2008. Come down and browse our selection of calatheas, dracaenas, and pothos. When you need a special plant, there's one place to go: OnlyPlants.</p></figcaption></figure>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderVendor(testVendor);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render vendor div should return a div for vendor detail', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="detail-container"><h2>OnlyPlants</h2><img src="../assets/only_plants.jpg"><p>Portland's home for sexy plants since 2008. Come down and browse our selection of calatheas, dracaenas, and pothos. When you need a special plant, there's one place to go: OnlyPlants.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderVendorDetail(testVendor);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render product should return a div for product', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="product"><a href="#" class="column" id="caption"><span class="text"><h1>Calatheas are known for their beautiful foliage and tempermental personalities.</h1></span><img src="../assets/../assets/plant1.jpg"></a><p>Calathea</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(testProduct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


