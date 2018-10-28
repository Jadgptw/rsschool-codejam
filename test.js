const assert = require('assert');

const sumOfOther = require('./src/sumOfOther.js');

const make = require('./src/make.js');

const sum = (a, b) => a + b;

const recursion = require('./src/recursion.js');

const tree = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};


describe('sumOfOther function', () => {
  it('check empty array', () => {
    assert.deepEqual(sumOfOther([]), []);
  });
  it('check array with three elements', () => {
    assert.deepEqual(sumOfOther([1, 2, 3]), [5, 4, 3]);
  });
  it('check big array', () => {
    assert.deepEqual(sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [54, 53, 52, 51, 50, 49, 48, 47, 46, 45]);
  });
});

describe('make function', () => {
  it('check function without arguments', () => {
    assert.deepEqual(make(sum), 0);
  });
  it('check three numbers', () => {
    assert.deepEqual(make(5)(10)(15)(sum), 30);
  });
  it('check function with one and many arguments', () => {
    assert.deepEqual(make(5)(10, 15, 20)(25)(sum), 75);
  });
});

describe('recursion function', () => {
  it('check tree from the task', () => {
    assert.deepEqual(recursion(tree), [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
