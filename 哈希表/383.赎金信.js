/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0);
  let base = "a".charCodeAt();
  for (const str of magazine) {
    strArr[str.charCodeAt() - base]++;
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false; // 如果没记录过直接返回false
    strArr[index]--;
  }
  return true;
};
// @lc code=end
