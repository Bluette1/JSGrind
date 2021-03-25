const Node = require('./Node');

class Tree {
  constructor(value = null) {
    this.root = null;
    if (value !== null) {
      this.root = new Node(value);
    }
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
      return '';
    }
    let str = `${root.value}`;
    root.children.forEach(child => {
      str += ` ${this.printPreOrder(child)}`;
    });
    return str.trim();
  }

  printPostOrder(root) {
    if (this.root === null) {
      return '';
    }
    let str = '';
    root.children.forEach(child => {
      str += `${this.printPostOrder(child)} `;
    });
    return  `${str}${root.value}`.trim();
  }
}
const tr = new Tree(0);
tr.add(5, tr.root, [4]);
tr.add(3, tr.root, [2, 0]);
tr.add(6, tr.root, [1, 5]);
tr.add(1, tr.root.children[1].children[0], [1]);
tr.add(10, tr.root.children[1].children[1]);

console.log('Preorder:');
console.log(tr.printPreOrder(tr.root, ''));

console.log('Postorder:');
console.log(tr.printPostOrder(tr.root));