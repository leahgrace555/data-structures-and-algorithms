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

  it('should add a new node when add is called', () => {
    const linkedList = new LinkedList();
    linkedList.addToFront(1);
    const result = linkedList.toString()
    expect(result).toEqual('{1}->NULL');
})

  it('should add a new node when addToEnd is called', () => {
    const linkedList = new LinkedList();
    linkedList.addToFront(1);
    linkedList.addToEnd(5);
    
    const result = linkedList.toString()
    expect(result).toEqual('{1}->{5}->NULL');
  })

  it('should return true if the ll includes the search key', () => {
    const linkedList = new LinkedList();
    linkedList.addToFront(1);
    linkedList.addToEnd(5);
    
    const result = linkedList.includes(5)
    const result2 = linkedList.includes(574930845);
    expect(result).toBeTruthy();
    expect(result2).toBeFalsy();

    linkedList.insertAfter(1,70)

    const result3 = linkedList.toString();
    expect(result3).toEqual('{1}->{70}->{5}->NULL')

  })
})