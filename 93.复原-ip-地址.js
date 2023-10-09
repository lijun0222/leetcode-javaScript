/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [],
    path = [];

  const backtracking = (start) => {
    if (path.length > 4) return;
    if (path.length === 4 && start === s.length) {
      res.push(path.join("."));
      return;
    }
    for (let i = start; i < s.length; i++) {
      const str = s.slice(start, i + 1);
      if (str.length > 3 || +str > 255) break;
      if (str.length > 1 && str[0] === "0") break;
      path.push(str);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end
