/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    let leftNode = queue.shift();
    let rightNode = queue.shift();
    if (leftNode === null && rightNode === null) {
      return true;
    }
    if (
      leftNode === null ||
      rightNode === null ||
      leftNode.val !== rightNode.val
    ) {
      return false;
    }
    queue.push(leftNode.left);
    queue.push(rightNode.right);
    queue.push(leftNode.right);
    queue.push(rightNode.left);
  }
  return true;
};
// @lc code=end
