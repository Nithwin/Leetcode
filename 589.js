class TreeNode {
  constructor(value) {
      this.value = value;
      this.children = [];
  }

  // Add a single child node
  addChild(childNode) {
      this.children.push(childNode);
  }

  // Add multiple children nodes at once
  addChildren(childrenValues) {
      childrenValues.forEach(value => {
          const childNode = new TreeNode(value);
          this.addChild(childNode);
      });
  }

  // Recursively print the tree (for demonstration purposes)
  printTree(level = 0) {
      console.log(" ".repeat(level * 2) + this.value);
      this.children.forEach(child => child.printTree(level + 1));
  }
}

// Example usage
let root = new TreeNode("root");

let child1 = new TreeNode("child1");
let child2 = new TreeNode("child2");
let child3 = new TreeNode("child3");

root.addChild(child1);
root.addChild(child2);

child1.addChild(child3);

child1.addChildren(["nestedChild1", "nestedChild2"]);
child3.addChildren(["nestedChild3", "nestedChild4"]);

// Print the tree starting from the root
root.printTree();
