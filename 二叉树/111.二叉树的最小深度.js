/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  const queue = [];
  let maxLen = 0;
  if (!root) {
    return maxLen;
  }
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    maxLen++;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left === null && node.right === null) {
        return maxLen;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return maxLen;
};
// @lc code=end
