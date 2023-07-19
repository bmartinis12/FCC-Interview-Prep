# Delete a Node with One Child in a Binary Search Tree #

We've provided some code in our remove method that accomplishes the tasks from the last challenge. We find the target to delete and its parent and define the number of children the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In addition, let's account for the case where the target is the root node (this means the parent node will be null). Feel free to replace all the starter code with your own as long as it passes the tests.

## Link: ##
  - https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/delete-a-node-with-one-child-in-a-binary-search-tree
