var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;

  this.remove = (value) => {
    if(!this.root){
      return null;
    }
    
    let node = this.root;
    let parent;
    while(node && node.value !== value){
      parent = node;
      if(value > node.value){
        node = node.right;
      } else {
        node = node.left;
      }
    }

    if(!node) return null;

    if(parent == undefined) {
      this.root = null;
    } else {
      if(value > parent.value){
        parent.right = null;
      } else {
        parent.left = null;
      }
    }
  }
}
