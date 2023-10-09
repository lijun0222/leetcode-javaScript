/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let arr = [];
  const buildArr = (root) => {
    if (root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  };
  buildArr(root);
  let diff = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (diff > arr[i] - arr[i - 1]) {
      diff = arr[i] - arr[i - 1];
    }
  }
  return diff;
};
// @lc code=end
