/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [],
    path = [];
  nums.sort((a, b) => a - b);
  const backtracking = (start) => {
    res.push([...path]);
    if (start > nums.length - 1) {
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end
