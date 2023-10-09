/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [],
    path = [];
  candidates.sort((a, b) => a - b);

  const backtracking = function (sum, start) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const n = candidates[i];
      if (n > target - sum) {
        break;
      }
      path.push(n);
      sum += n;
      backtracking(sum, i);
      sum -= n;
      path.pop();
    }
  };
  backtracking(0, 0);
  return res;
};
// @lc code=end
