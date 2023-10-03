/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var countSubstrings = function (s) {
//   const strLen = s.length;
//   let numOfPalindromicStr = 0;
//   let dp = Array.from(Array(strLen), () => Array(strLen).fill(false));
//   for (let j = 0; j < strLen; i++) {
//     for (let i = 0; i <= j; i++) {
//       if (s[i] === s[j]) {
//         if (j - i < 2) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1];
//         }
//         numOfPalindromicStr += dp[i][j] ? 1 : 0;
//       }
//     }
//   }
//   return numOfPalindromicStr;
// };
var countSubstrings = function (s) {
  const len = s.length;
  let numOfPalindromicStr = 0;

  for (let i = 0; i < 2 * len - 1; i++) {
    let left = Math.floor(i / 2);
    let right = left + (i % 2);

    while (left >= 0 && right < len && s[left] === s[right]) {
      numOfPalindromicStr++;
      left--;
      right++;
    }
  }
  return numOfPalindromicStr;
};
// @lc code=end
