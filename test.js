const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');

describe('sumOfOther function', () => {
    it('check empty array', () => {
        assert.deepEqual(sumOfOther([]), []);
    });
    it('check array with three elements', () => {
        assert.deepEqual(sumOfOther([1, 2, 3]), [5, 4, 3]);
    });
    it('check big array', () => {
        assert.deepEqual(sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [54, 53, 52, 51, 50, 49, 48, 47, 46, 45]);
    });
});