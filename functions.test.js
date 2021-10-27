const functions = require('./functions');

// .toBe is for testing primitive values
// if testing an object or an array use .toEqual instead

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// tobeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// To Be Null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
})

// To Be Falsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Brad Traversy Object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})