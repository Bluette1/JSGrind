const chalk = require('chalk');
const Node = require('./Node');

const { log } = console;

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
      childNodes.push(new Node(value));
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
    return `${str}${root.value}`.trim();
  }

  breadthFirst(root, str = '', queque = []) {
    if (root === null) {
      return str;
    }
    str += ` ${root.value}`;
    const { children } = root;

    queque.push(...children);

    if (queque.length > 0) {
      root = queque.shift();
      return this.breadthFirst(root, str, queque);
    }
    return str.trim();
  }

  depthFirst(root, str = '', stack = []) {
    if (root === null) {
      return str;
    }
    str += ` ${root.value}`;
    while (root.children.length > 0) {
      const { children } = root;
      [root] = children;

      stack.unshift(...children.slice(1));
      str += ` ${root.value}`;
    }

    if (stack.length > 0) {
      const root = stack.shift();
      return this.depthFirst(root, str, stack);
    }
    return str.trim();
  }

  minimumPath(root, stack = []) {
    if (root === null) {
      return 0;
    }
    let sum = root.value;
    if (root.sum) {
      sum += root.sum;
    }
    const prevSum = sum;
    while (root.children.length > 0) {
      const { children } = root;
      [root] = children;
      for (let i = 1; i < children.length; i += 1) {
        children[i].sum = prevSum;
        stack.unshift(children[i]);
      }

      sum += root.value;
    }
    if (stack.length > 0) {
      const root = stack.shift();
      return Math.min(sum, this.minimumPath(root, stack));
    }
    return sum;
  }
}
const tr = new Tree(0);
tr.add(5, tr.root, [4]);
tr.add(3, tr.root, [2, 0]);
tr.add(6, tr.root, [1, 5]);
tr.add(1, tr.root.children[1].children[0], [1]);
tr.add(10, tr.root.children[1].children[1]);
log(chalk.bgMagentaBright.bold('BreadthFirst:'));
log(chalk.greenBright(tr.breadthFirst(tr.root)));

log(chalk.bgMagentaBright.bold('DepthFirst:'));
log(chalk.greenBright(tr.depthFirst(tr.root)));

log(chalk.bgMagentaBright.bold('Preorder:'));
log(chalk.greenBright(tr.printPreOrder(tr.root, '')));

log(chalk.bgMagentaBright.bold('Postorder:'));
log(chalk.greenBright(tr.printPostOrder(tr.root)));

log(chalk.bgMagentaBright.bold('Minimum:'));
log(chalk.greenBright(tr.minimumPath(tr.root)));
