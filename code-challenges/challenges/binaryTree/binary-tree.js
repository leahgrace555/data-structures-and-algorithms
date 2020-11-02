'use strict';

class Node {

  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  preOrder() {
    // returns an array of the values in the correct order
    // root - left - right
  }

  inOrder() {
    // left - root - right

    const values = []

    function traverse (root) {
      //helper to add to values at right time

      //traverse left
      //add to values
      //traverse right
    }

    traverse(this.root);

    return values;

  }

  postOrder() {

  }

}

class BinarySearchTree extends BinaryTree {

  constructor(root=null,comparator=null) {
    this.root=root;

  }

    add(value) {
      // this needs to 'wrap' the value up in a node and place in the correct place in tree
    }

    contains(key) {
      // needs to return a boolean representing whether the key is contianed in the tree
    }
}

module.exports = {
  Node,
  BinarySearchTree,
  BinaryTree
}