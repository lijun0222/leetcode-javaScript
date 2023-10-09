/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function (candidates, target) {
//   const res = [],
//     path = [];
//   candidates.sort((a, b) => a - b);
//   const backtracking = (sum, start) => {
//     if (sum === target) {
//       res.push([...path]);
//       return;
//     }
//     for (let i = start; i < candidates.length; i++) {
//       const n = candidates[i];
//       if (i > start && candidates[i] === candidates[i - 1]) {
//         continue;
//       }
//       if (n > target - sum) {
//         break;
//       }
//       sum += n;
//       path.push(n);
//       backtracking(sum, i + 1);
//       path.pop();
//       sum -= n;
//     }
//   };
//   backtracking(0, 0);
//   return res;
// };

var combinationSum2 = function (candidates, target) {
  const res = [],
    path = [];
  candidates.sort((a, b) => a - b);
  let sum = 0;
  const len = candidates.length;

  const used = new Array(len).fill(false);

  const backtracking = (start) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < len && sum < target; i++) {
      const cur = candidates[i];
      if (
        cur > target - sum ||
        (i > 0 && cur === candidates[i - 1] && !used[i - 1])
      ) {
        continue;
      }
      path.push(cur);
      sum += cur;
      used[i] = true;
      backtracking(i + 1);
      path.pop();
      sum -= cur;
      used[i] = false;
    }
  };
  backtracking(0);
  return res;
};
// @lc code=end
