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

// To Equal
test('User should be Brad Traversy Object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  })
})

// .toBeLessThan
// .toBeGreaterThan
// .toBeLessThanOrEqual

// Less than and Greater than
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
  // lower case i for regex is case insensitive
})

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

//  Working with Async Data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     })
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
})