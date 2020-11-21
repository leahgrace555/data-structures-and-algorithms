'use strict';

function quickSorter(arr,left,right) {
  if(left<right) {
    let position = partition(arr, left, right);

    quickSorter(arr,left,position -1)
    quickSorter(arr, position +1, right);
  }
}

function partition() {
  // let pivot = arr[right + Math.floor(left/2)];

  // let i = left;
  // let j = right;

  // while (i<=j) {
  //   while (arr[i] < pivot) {
  //     while(arr[j]) {
  //       j--;
  //     }
  //   }
  // }

  let pivotValue = arr[right];

  let low = left - 1; //currently not pointing at a value, trying to select the position to give us the most values below the pivot (-1)

  for (let i = left; i < right; i++ ) {
    if( arr[i] < pivot) {
      low++;
      swap(arr[i], i, low)
    }
  }

  swap (arr, right, low+1);

  return low + 1;

}

function swap () {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}