/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// 递归方法
// var invertTree = function (root) {
//   if (!root) {
//     return null;
//   }
//   // 交换左右节点
//   const rightNode = root.right;
//   root.right = invertTree(root.left);
//   root.left = invertTree(rightNode);
//   return root;
// };

// 迭代方法
var invertTree = function (root) {
  // 先定义节点交换函数
  const swap = function (root, left, right) {
    let temp = left;
    left = right;
    right = temp;
    root.left = left;
    root.right = right;
  };
  const stack = [];
  if (!root) {
    return root;
  }
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (node !== null) {
      // 前序遍历顺序中左右 入栈顺序是前序遍历的倒序右左中
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
      stack.push(node);
      stack.push(null);
    } else {
      node = stack.pop();
      swap(node, node.left, node.right);
    }
  }
  return root;
};
// @lc code=end
