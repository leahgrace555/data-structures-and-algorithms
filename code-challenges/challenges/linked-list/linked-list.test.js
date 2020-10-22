'use strict';

const LinkedList = require('./linked-list.js');

describe('testing challenge 4', () => {
  it('should add a value at the end of the linked list, or to the head if the list is empty', ()=> {
    const ll = new LinkedList();
    ll.addToEnd(5);
    console.log(ll);
  })
})