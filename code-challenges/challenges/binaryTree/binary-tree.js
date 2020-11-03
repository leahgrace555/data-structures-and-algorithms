'use strict';

class Node {

  constructor(value=null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  preOrder(root) {
    // returns an array of the values in the correct order
    // root - left - right
    if(root.left === null && root.right === null) {
      return null;
    }
    let values = []
    let current = root;
    this.preOrderTwo(current,values);
    return values;
  }

  preOrderTwo(root, array) {
    array.push(root.value);
    if(root.left !== null) {
      this.preOrderTwo(root.left,array)
    }
    if(root.right !== null) {
      this.preOrderTwo(root.right,array)
    }
  }

  inOrder(root) {
    // left - root - right
    if(root.left ===null && root.right === null) {
      return null;
    }
    const values = []
    let current = root;
    this.inOrderTwo(current,values);
    return values;
  }

  inOrderTwo(root, array) {
    if(root.left) {
      this.inOrderTwo(root.left,array)
    }
    array.push(root.value);
    if(root.right) {
      this.inOrderTwo(root.right,array)
    }
  }

  postOrder() {

  }

}

// class BinarySearchTree extends BinaryTree {

//   constructor(value,left,right,root,comparator) {
//     super(value,left,right)
//     this.root=root;

//   }

//     add(value) {
//       // this needs to 'wrap' the value up in a node and place in the correct place in tree
//       let newNode = new Node(value);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         insertNode(this.root,newNode);
//       }

//       function insertNode(node,newNode) {
//         if (newNode.value < node.value) {
//           if(node.left === null) {
//             node.left = newNode;
//           } else {
//             this.insertNode(node.left,newNode)
//           }
//         } else {
//           if (node.right === null) {
//             node.right = newNode;
//           } else {
//             this.insertNode(node.right,newNode);
//           }
//         }
//       }
//     }

//     contains(key) {
//       // needs to return a boolean representing whether the key is contianed in the tree
//     }
// }

// console.log(BinarySearchTree);

// // Testing binanry search tree

// let testTree = new BinarySearchTree();
// testTree.add(5);

module.exports = {
  tree: BinaryTree,
  node: Node
}