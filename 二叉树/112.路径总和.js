/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//   const traversal = function (node, cnt) {
//     if (cnt === 0 && !node.left && !node.right) {
//       return true;
//     }
//     if (!node.left && !node.right) {
//       return false;
//     }

//     if (node.left && traversal(node.left, cnt - node.left.val)) {
//       return true;
//     }
//     if (node.right && traversal(node.right, cnt - node.right.val)) {
//       return true;
//     }
//     return false;
//   };
//   if (!root) return false;
//   return traversal(root, targetSum - root.val);
// };
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let nodeArr = [root];
  let valArr = [0];
  while (nodeArr.length) {
    let curNode = nodeArr.shift();
    let curVal = valArr.shift();
    curVal += curNode.val;
    if (
      curNode.left === null &&
      curNode.right === null &&
      curVal === targetSum
    ) {
      return true;
    }
    if (curNode.left) {
      nodeArr.push(curNode.left);
      valArr.push(curVal);
    }
    if (curNode.right) {
      nodeArr.push(curNode.right);
      valArr.push(curVal);
    }
  }
  return false;
};
// @lc code=end
