class Node {
	constructor(value, parentNode, children) {
        this.parent = parentNode;
        this.children = children;
        this.value = value;
    };
}

class Tree {
    add(value, parentNode = null, children = []) {
        Node newNode = new Node (value);

    }
}