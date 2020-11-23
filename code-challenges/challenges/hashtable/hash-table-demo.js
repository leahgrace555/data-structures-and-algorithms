'use strict';

//used for strage and security, has an index or "address" that points to a "bucket"

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size) // initialize a new array of a specific size, all values inside will be undef.

  }

  //this function takes in a key and returns and index that points to a bucket
  hash(key) {

    let sum=0
    //need to get ascii values for string
    for (let i = 0; i < key.length; i ++){
     sum += key.charCodeAt(i);
    }

    return (sum * 299) % this.size;
  }

  set(key, value) {

    let index = this.hash(key);

    if(!this.buckets[index]) {
      ///
      this.buckets[index] = new LinkedList();
    } else {
      this.buckets[index].add({ [key]: value })
  
    }
  }


}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      return; 
    }
    let current = this.head;

    while(current) {
      current.next = newNode;
    }
    current = current.next;
  }

  //add a method for 'grabbing' values for the hash table
  values() {

  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}