/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let low = Infinity;
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     low = Math.min(low, prices[i]);
//     result = Math.max(result, prices[i] - low);
//   }
//   return result;
// };
var maxProfit = function (prices) {
  const len = prices.length;

  const dp = new Array(prices.len).fill([0, 0]);
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]),
    ];
  }
  return dp[len - 1][1];
};
// @lc code=end
