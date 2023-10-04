/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let l = 0,
    r = n - 1,
    t = 0,
    b = n - 1;
  let num = 1,
    tar = n * n;
  while (num <= tar) {
    for (let i = l; i <= r; i++) {
      arr[t][i] = num++;
    }
    t++;
    for (let i = t; i <= b; i++) {
      arr[i][r] = num++;
    }
    r--;
    for (let i = r; i >= l; i--) {
      arr[b][i] = num++;
    }
    b--;
    for (let i = b; i >= t; i--) {
      arr[i][l] = num++;
    }
    l++;
  }
  return arr;
};
// @lc code=end
