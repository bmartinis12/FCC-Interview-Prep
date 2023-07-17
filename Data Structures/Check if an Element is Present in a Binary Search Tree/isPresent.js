var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  
  this.isPresent = (num) => {
    if(!this.root){
      return false
    }

    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value == num){
        return true;
      }

      if(currentNode.value > num){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false
  }
}
