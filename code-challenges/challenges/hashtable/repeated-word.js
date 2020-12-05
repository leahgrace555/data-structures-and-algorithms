'use strict';

const {hashTable} = require('./hashtable.js');

function findFirstRepeat(str) {

  let words = str.split(' ');
  let storedWord = new hashTable(1024);

  for(let i = 0; i< words.length; i++) {
    if(storedWord.contains(words[i])) {
      return words[i];
    } else {
      storedWord.set(words[i],"words")
    }
  }
}

module.exports = findFirstRepeat;