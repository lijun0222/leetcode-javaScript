/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const [m, n] = [nums1.length, nums2.length];

  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      res = dp[i][j] > res ? dp[i][j] : res;
    }
  }
  return res;
};
// @lc code=end
