class Node {
	constructor(value, parentNode = null, children = []) {
		this.parent = parentNode;
		this.children = children;
		this.value = value; 
	};
}

class Tree {
	add(value, root, parentNode = null, children = []) {;
        if (root === null) {
            return new Node (value);
        }

        Node newNode = new Node(value, parentNode, children);
        parentNode.children.push(newNode);
        return root;
	}

	printPreOrder() {
		if (root === null) {
				return;
		}
		console.log(root);
		printPreOrder(root.children);
	}

	printPostOrder(root) {
		if (root === null) {
			return;
		}
		printPostOrder(root.children);
		console.log(root);
	}
}

Tree tr = new Tree();
tr.add()  