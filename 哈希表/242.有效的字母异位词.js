/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let char = new Map();
  for (let item of s) {
    char.set(item, (char.get(item) || 0) + 1);
  }
  for (let item of t) {
    if (!char.get(item)) return false;
    char.set(item, char.get(item) - 1);
  }
  return true;
};
// @lc code=end
