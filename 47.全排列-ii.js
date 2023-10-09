/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [],
    path = [];

  const backtracking = (used) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtracking(used);
        path.pop();
        used[i] = false;
      }
    }
  };
  backtracking([]);
  return res;
};
// @lc code=end
