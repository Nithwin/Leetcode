class ListNode {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(root = this.root, value) {
    if (root === null) {
      root = new ListNode(value);
      if (this.root === null) {
        this.root = root;
      }
      return root;
    }
    if (value < root.val) {
      root.left = this.insert(root.left, value);
    } else if (value > root.val) {
      root.right = this.insert(root.right, value);
    }
    return root;
  }

  print() {
    if (this.root === null) return;
    // Simple in-order traversal to print the tree
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }
}

const tree = new Tree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.print();
console.log(tree);

