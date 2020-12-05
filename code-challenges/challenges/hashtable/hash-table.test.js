'use strict';

const hashTable = require('./hashtable.js');
const HashTable = hashTable.hashTable;
const Node = hashTable.node;
const LinkedList = hashTable.linkedList;


describe('testing hash table', ()=> {
  it('should be able to correctly add key value pairs', ()=> {
    const testTable = new HashTable(1024);
    testTable.set('Jacob', 'Instructor');
    testTable.set('adrien', 'ta');

      expect(testTable.contains('Jacob')).toEqual(true);
  })
})




// let input = 'jacob';
// let output = 817;

// testTable.hash(input) === output;
// testTable.hash('Jacob');


// if (testTable.contains('Jacob')) {
//   console.log('Table can add correct key value pairs');
// } else {
//   console.log('somethings broke');
// }

// if (!testTable.contains('wrong')) {
//   console.log('Table returns false when given a wrong key');
// } else {
//   console.log('something is broke');
//}