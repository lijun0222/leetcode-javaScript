/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  const backtrace = (nums, target, index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        count++;
      }
    } else {
      backtrace(nums, target, index + 1, sum + nums[index]);
      backtrace(nums, target, index + 1, sum - nums[index]);
    }
  };

  backtrace(nums, target, 0, 0);
  return count;
};
// @lc code=end
