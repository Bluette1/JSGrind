class Node {
  constructor(value, parentNode = null, children = []) {
    this.parent = parentNode;
    this.children = children;
    this.value = value;
  }
}

module.exports = Node;