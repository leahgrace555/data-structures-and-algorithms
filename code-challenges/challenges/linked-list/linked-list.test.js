'use strict';

const LinkedList = require('./linked-list.js');

// describe('testing challenge 4', () => {
//   it('should add a value at the end of the linked list, or to the head if the list is empty', ()=> {
//     const ll = new LinkedList();
//     ll.addToEnd(6);
//     ll.addToEnd(7);
//     ll.addToEnd(8);
//     expect(ll.toString()).toEqual('blah');
//   })
// })

describe('Testing challenge 4', () => {
  it('should return null for the head when the ll is empty', () => {
      const linkedList = new LinkedList();
      expect(linkedList.head).toBeNull();
  })
})