//const cart = require("../cart.js");
const { addItem, removeItem, getTotalItems } = require('../cart');


describe('addItem', () => {
  test('Should add a new item with a valid name and quantity', () => {
    let cart = {};
    let updatedCart = addItem(cart, 'bananas', 5);
    expect(updatedCart).toEqual({bananas: 5});
  });
  test('Should not accept a negative quantity or quantity of 0', () => {
    let cart = {bananas: 5};
    expect(addItem(cart, 'bananas', 0)).toEqual({bananas: 5});
    expect(addItem(cart, 'bananas', -5)).toEqual({bananas: 5});
    expect(addItem(cart, 'bananas', 'invalid')).toEqual({bananas: 5});
  });
});

describe('removeItem', () => {
  test('Should remove an item from the cart', () => {
    let cart = {bananas: 5, milk: 2};
    let updatedCart = removeItem(cart, 'bananas');
    expect(updatedCart).toEqual({milk: 2});
  });
  test('Should attempt to remove an item that is not in the cart', () => {
  let cart = {milk: 2};
  let updatedCart = removeItem(cart, 'turkey');
  expect(updatedCart).toEqual({milk: 2});
});
  test('Should return an empty object if cart ie invalid', () => {
    expect(removeItem(null, 'bananas')).toEqual({});
  });
});
describe('getTotalItems', () => {
  test('Should calculate the total number of items', () => {
    let cart = { bananas: 5, milk: 2, turkey: 2};
    expect(getTotalItems(cart)).toBe(9);
  });
  test('Should handle an empty cart and return 0', () => {
    expect(getTotalItems({})).toBe(0);
  });
  test('Should handle negative values or invalid values in the cart', () => {
    let cart = { bananas: 5, milk: -2, turkey: 'invalid'};
    expect(getTotalItems(cart)).toBe(5);

  });

});