var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.add = function(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return undefined;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === newNode.value) {
        return null;
      }

      const direction = currentNode.value > newNode.value ? "left" : "right";
      if (!currentNode[direction]) {
        currentNode[direction] = newNode;
        return undefined;
      }

      currentNode = currentNode[direction];
    }
  }

  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    else {
      let min = this.findMin(target.right);
      this.remove(min);
      target.value = min;
    }
  };

  this.findMin = (node) => {
    if(!node) {
      return null;
    }
    let currentNode = node;
    while(currentNode) {
      if(!currentNode.left){
        return currentNode.value;
      }
      currentNode = currentNode.left;
    }
  }
}
