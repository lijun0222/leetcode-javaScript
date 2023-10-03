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

  const backtracking = (s, start) => {
    if (start >= s.length) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        const str = s.slice(start, i + 1);
        path.push(str);
      } else {
        continue;
      }
      //起始位置后移，保证不重复
      backtracking(s, i + 1);
      path.pop();
    }
  };

  function isPalindrome(s, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  }

  backtracking(s, 0);
  return res;
};
// @lc code=end
