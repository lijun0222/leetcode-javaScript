/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const k = digits.length;
  const map = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  if (!k) {
    return [];
  }
  if (k === 1) {
    return map[digits].split("");
  }
  const res = [],
    path = [];

  const backtracking = (n, k, a) => {
    if (path.length === k) {
      res.push(path.join(""));
      return;
    }
    for (let v of map[n[a]]) {
      path.push(v);
      backtracking(n, k, a + 1);
      path.pop();
    }
  };
  backtracking(digits, k, 0);
  return res;
};
// @lc code=end
