'use strict';

const insertionSort = require('./insertionsort.js')
;
describe('Testing challenge 26', ()=> {
  it('Should sort the array in ascending order', ()=> {
    let arr = [8,4,23,42,16,15];
    let expectedArr = [4,8,15,16,23,42];

    expect(arr.insertionSort().toEqual(expectedArr));
  })

  it('Should be able to sort an array with few unique numbers', ()=> {
    let testArr = [5,12,7,5,5,7];
    let expectedArr = [5,5,5,7,7,12];

    expect(arr.insertionSort().toEqual(expectedArr));
  })
})