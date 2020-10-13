'use strict';

function reverseArray(arr) {
  let reversedArr = [];
  let reversedArrIdx = 0;

  for(let i = arr.length -1; i>=0;i--){
    reversedArr[reversedArrIdx] = arr[i];
    reversedArrIdx++;
  }
 // console.log(reversedArr);
  return reversedArr;
}

let testArr = [3,4,5,6];

reverseArray(testArr);

module.exports = reverseArray;
