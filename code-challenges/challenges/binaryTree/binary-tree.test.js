'use strict';

const Tree = require('./binary-tree.js');

describe('testig binary tree', ()=> {
  it('should make a tree', ()=> {
    const tree = new Tree.tree();
    const node1 = new Tree.node(1);
    const node2 = new Tree.node(2);
    const node3 = new Tree.node(3);
    const node4 = new Tree.node(4);
    tree.root = node1;
    tree.root.leftChild = node2;
    tree.root.rightChild = node3;
    tree.root.rightChild.leftChild = node4;
    expect(tree.preOrder(tree.root)).toEqual([1,2,3,4]);
  })
})