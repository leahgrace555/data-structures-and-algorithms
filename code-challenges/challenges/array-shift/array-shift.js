'use strict';

console.log('test string');

function arrayShift(arr,val){
  ////console.log("uhmm what")
  let shiftedArr = []
  let middleIndex = 0;
 // console.log(shiftedArr);
  if(arr.length % 2 === 0){
    middleIndex = arr.length/2 
  } else {middleIndex = Math.ceil(arr.length/2)}

  for(let i = 0; i < arr.length; i++) {
    if(i<middleIndex) {
      shiftedArr[i] = arr[i];
    } else if(i===middleIndex) {
      shiftedArr[i] = val;
      shiftedArr[i+1] = arr[i]
    } else { shiftedArr[i+1] = arr[i] }
  }
  console.log(shiftedArr);
  //console.log(middleIndex);
}

let testArr = [4,8,15,23,42];
let test2 = [1,2,3,4]
let testValue = 16;

arrayShift(test2,testValue);

