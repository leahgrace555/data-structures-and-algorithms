'use strict';

const reversedArray = require('./array-reverse.js');

describe('testing challenge 1', ()=> {
  test('wo using built in methods, reverse an array', ()=> {
    expect(reversedArray([1,2,3])).toStrictEqual([3,2,1])
  })
});

