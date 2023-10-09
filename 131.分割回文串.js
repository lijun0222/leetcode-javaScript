/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [],
    path = [];

  const backtracking = (start) => {
    if (start >= s.length) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) {
        continue;
      }
      path.push(s.slice(start, i + 1));
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
var isPalindrome = function (s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
