class Node {
  constructor(value, parentNode = null, children = []) {
    this.parent = parentNode;

    children.forEach(child => {
      child.parent = this;
    });
    this.children = children;
    this.value = value;
  }
}

module.exports = Node;