/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} nz
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      // dp[i] += dp[i - j];
    }
  }
};
// @lc code=end
