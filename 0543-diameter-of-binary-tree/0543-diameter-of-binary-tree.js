/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let longest = 0;
  
  function getDepthOfBranch(node) {
    let leftBranch = 0, rightBranch = 0;

    if(node.left) {
      leftBranch = getDepthOfBranch(node.left) + 1;
    }
    if (node.right) {
      rightBranch = getDepthOfBranch(node.right) + 1;
    }
    
    if(leftBranch + rightBranch > longest) {
      longest = leftBranch + rightBranch
    }

    return leftBranch > rightBranch ? leftBranch : rightBranch;

  }
  getDepthOfBranch(root);

  return longest;
    
};