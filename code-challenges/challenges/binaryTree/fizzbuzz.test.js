'use strict';

const fizzbuzz = require('./fizzbuzz.js');

describe('testing challenge 18', ()=> {
  it('should perform fizzbuzz on the value passed in', ()=> {
    let testArr = [1,3,5,10,15];
    let expectedArr = ['1','fizz','buzz','buzz','fizzbuzz'];
    let outputArr = [];
    
    testArr.forEach(value => {
      outputArr.push(fizzbuzz.fizzbuzz(value));
    })
    
    expect(outputArr).toEqual(expectedArr);
  })
})