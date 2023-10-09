/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [],
    path = [];

  const backtracking = (start) => {
    if (path.length > 1) {
      res.push([...path]);
    }
    let used = [];
    for (let i = start; i < nums.length; i++) {
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) ||
        used[nums[i] + 100]
      ) {
        continue;
      }
      used[nums[i] + 100] = true;
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end
