const Node = require('./Node');

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  add(value, parentNode = null, children = []) {
    const childNodes = [];
    children.forEach(value => {
      childNodes.push(new Node(value, parentNode));
    });
    const newNode = new Node(value, parentNode, childNodes);

    if (this.root === null) {
      this.root = newNode;
    } else {
      parentNode.children.push(newNode);
    }
    return newNode;
  }

  printPreOrder(root) {
    if (root === null) {
      return;
    }
    console.log(root.value);
    root.children.forEach(child => {
      this.printPreOrder(child);
    });
  }

  printPostOrder(root) {
    if (this.root === null) {
      return;
    }
    root.children.forEach(child => {
      this.printPostOrder(child);
    });
    console.log(root.value);
  }
}
const tr = new Tree();
tr.add(0);
tr.add(5, tr.root, [4]);
tr.add(3, tr.root, [2, 0]);
tr.add(6, tr.root, [1, 5]);
tr.add(1, tr.root.children[1].children[0], [1]);
tr.add(10, tr.root.children[1].children[1], []);
console.log('Preorder:');
tr.printPreOrder(tr.root);
console.log('Postorder:');

tr.printPostOrder(tr.root);