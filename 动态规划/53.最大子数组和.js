/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  let result = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]); // 状态转移公式
    if (dp[i] > result) {
      result = dp[i];
    }
  }
  return result;
};
// @lc code=end
