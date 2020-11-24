'use strict';

const hashTable = require('./hashtable.js');
const HashTable = hashTable.hashTable;
const Node = hashTable.node;
const LinkedList = hashTable.linkedList;

function findFirstRepeat(str) {

  let words = str.split(' ');
  let storedWord = new HashTable();

  for(let i = 0; i< words.length; i++) {
    if(storedWord.contains(words[i])) {
      return words[i];
    } else
  }
}

let str = 'this is a string and stuff';
let splitstr = str.split(' ');
console.log(splitstr);