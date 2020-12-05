'use strict';

function leftJoin(hashOne,hashTwo) {
  let output = [];
  
  for(let i=0; i< hashOne.buckets.length;i++) {

    let arr = [];

    let walker;
    let runner;
    if(hashOne.buckets[i]) {
      walker = hashOne.buckets[i].head;

      if(hashTwo.buckets[i]) {
        runner = hashTwo.buckets[i].head;
      } else {
        runner = null;
      }
    } else {
      walker = null;
    }

    if(walker && !runner) {
      arr.push(walker.value.key,walker.value.value,'NULL')
      output.push(arr)
    }

    while(walker && runner) {
      arr = [];
      if(walker.value.key===runner.value.key) {
        arr.push(walker.value.key,walker.value.value,runner.value.value)
        output.push(arr)
      } 

      walker = walker.next;
      runner = runner.next;
    }

  

    // arr[0] = key//ket of hashOne
    // arr[1] = value//value for key at hasHone
    // if(hashTwo.contains(key)) {
    //   arr[2] = hashTwo.get(key)// value for key at hash two
    // } else { arr[2] = null }

    // output.push(arr);
  }
  console.log(output)
  return output;
}

module.exports = leftJoin;