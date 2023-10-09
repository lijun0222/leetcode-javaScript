/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */

// 使用额外的map空间
var findMode = function (root) {
  let map = new Map();

  const traverTree = function (root) {
    if (root === null) {
      return;
    }
    traverTree(root.left);
    map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1);
    traverTree(root.right);
  };
  traverTree(root);

  // 定义一个最大出现次数的初始值为root.val的出现次数
  let maxCount = map.get(root.val);
  // 定义一个存放结果的数组res
  let res = [];
  for (let [key, value] of map) {
    if (value === maxCount) {
      res.push(key);
    }
    if (value > maxCount) {
      res = [];
      maxCount = value;
      res.push(key);
    }
  }
  return res;
};
// @lc code=end
