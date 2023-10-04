/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const res = [],
    stack = [];

  if (!root) return res;
  stack.push(root);
  while (stack.length) {
    const len = stack.length;
    const curLevel = [];
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      curLevel.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    res.push(curLevel);
  }
  return res.reverse();
};
// @lc code=end
