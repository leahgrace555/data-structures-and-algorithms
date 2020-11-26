'use strict';

function leftJoin(hashOne,hashTwo) {
  let output = [];
  
  for(let [key,value] of hashOne) {
    let arr = new Array[3];

    arr[0] = key//ket of hashOne
    arr[1] = value//value for key at hasHone
    if(hashTwo.contains(key)) {
      arr[2] = hashTwo.get(key)// value for key at hash two
    } else { arr[2] = null }

    output.push(arr);
  }

  return output;
}

module.exports = leftJoin;