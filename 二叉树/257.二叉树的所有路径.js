/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];

  const getPath = function (node, curPath) {
    // 确定终止条件
    if (node.left === null && node.right === null) {
      curPath += node.val;
      res.push(curPath);
      return;
    }

    curPath += node.val + "->";
    node.left && getPath(node.left, curPath);
    node.right && getPath(node.right, curPath);
  };
  getPath(root, "");
  return res;
};
// @lc code=end
