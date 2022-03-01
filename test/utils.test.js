import { renderVendor, renderVendorDetail, renderProduct } from '../render-utils.js';
const test = QUnit.test;

const testVendor = {
    name: 'onlyPlants',
    image: 'only_plants.jpg',
    description: 'Your one-stop shop for sexy plants.'
};

const testProduct = {
    name: 'plant1',
    image: 'plant1.jpg',
};

test('render vendor div should return a div for vendor', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="vendor"><img src="./assets/only_plants.jpg"><p>onlyPlants</p></div>`;
    
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
    const expected = `<div class="detail-container"><h2>onlyPlants</h2><img src="../assets/only_plants.jpg"><p>Your one-stop shop for sexy plants.</p></div>`;
    
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
    const expected = `<div class="product"><img src="../assets/plant1.jpg"><p>plant1</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(testProduct);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


