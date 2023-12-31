/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  const rootVal = preorder.shift();
  const rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);
  root.left = buildTree(
    preorder.slice(0, rootIndex),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex),
    inorder.slice(rootIndex + 1)
  );
  return root;
};
// @lc code=end
