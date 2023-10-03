/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = new Array(prices.length)
    .fill()
    .map(() => new Array(2 * k + 1).fill(0));

  if (prices.length === 0) {
    return 0;
  }
  for (let j = 1; j < 2 * k; j += 2) {
    dp[0][j] = -prices[0];
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 2 * k - 1; j += 2) {
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
    }
  }
  return dp[prices.length - 1][2 * k];
};
// @lc code=end
