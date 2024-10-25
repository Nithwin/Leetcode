class TreeNode {
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

  // Insert a new value into the tree
  insert(value, root = this.root) {
    if (root === null) {
      let node = new TreeNode(value);
      if (this.root === null) {
        this.root = node;

      }
      return node;
    }
    if (value < root.val) {
      root.left = this.insert(value, root.left);
    } else if (value > root.val) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  // Print the tree nodes
  print(root = this.root) {
    if (root === null) return;
    console.log(root.val);
    if (root.left) this.print(root.left);
    if (root.right) this.print(root.right);
  }

  bst(){
    let root = this.root;
    let max = [];
    let queue = [root]
    while(queue.length){
      let len = queue.length;
      let a = []
      while(len){
        let curr = queue.shift();
        a.push(curr.val);
        if(curr.left){
          queue.push(curr.left);
        }
        if(curr.right){
          queue.push(curr.right);
        }
        len--;
      }
      max.push(Math.max(...a))
    }
    return max;
  }
}

// Create a new tree and insert some values
let tree = new Tree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(8);
tree.insert(1);
tree.insert(9);

// Print the tree and inspect the structure
tree.print();
console.log(tree.bst());
console.log(tree);
