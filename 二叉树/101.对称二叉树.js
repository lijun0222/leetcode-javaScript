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
// var isSymmetric = function (root) {
//   // 迭代方式判断是否为对称二叉树
//   if (root === null) {
//     return true;
//   }
//   const queue = [];
//   queue.push(root.left);
//   queue.push(root.right);
//   while (queue.length) {
//     let leftNode = queue.shift();
//     let rightNode = queue.shift();
//     if (rightNode === null && rightNode === null) {
//       continue;
//     }
//     if (
//       leftNode === null ||
//       rightNode === null ||
//       leftNode.val !== rightNode.val
//     ) {
//       return false;
//     }
//     queue.push(leftNode.left);
//     queue.push(rightNode.right);
//     queue.push(leftNode.right);
//     queue.push(rightNode.left);
//   }
//   return true;
// };
var isSymmetric = function (root) {
  // 迭代方法判断是否是对称二叉树
  // 首先判断root是否为空
  if (root === null) {
    return true;
  }
  let queue = [];
  queue.push(root.left);
  queue.push(root.right);
  while (queue.length) {
    let leftNode = queue.shift(); //左节点
    let rightNode = queue.shift(); //右节点
    if (leftNode === null && rightNode === null) {
      continue;
    }
    if (
      leftNode === null ||
      rightNode === null ||
      leftNode.val !== rightNode.val
    ) {
      return false;
    }
    queue.push(leftNode.left); //左节点左孩子入队
    queue.push(rightNode.right); //右节点右孩子入队
    queue.push(leftNode.right); //左节点右孩子入队
    queue.push(rightNode.left); //右节点左孩子入队
  }

  return true;
};
// @lc code=end
