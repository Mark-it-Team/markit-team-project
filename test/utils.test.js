import { renderVendor } from '../render-utils.js';
const test = QUnit.test;

const testVendor = {
    name: 'onlyPlants',
    image: 'only_plants.jpg'
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
