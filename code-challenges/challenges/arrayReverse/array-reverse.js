'use strict';

function reverseArray (arr) {
  let forwardArr = arr;
  let reversedArr = [];
  for(let i = forwardArr.length -1; i>=0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr);
}

let testarr = [1,2,3,4]

reverseArray(testarr)

