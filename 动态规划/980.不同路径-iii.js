/*
 * @lc app=leetcode.cn id=980 lang=javascript
 *
 * [980] 不同路径 III
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let si = 0,
    sj = 0,
    count = 0;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        count++;
      } else if (grid[i][j] === 1) {
        count++;
        si = i;
        sj = j;
      }
    }
  }
  return dfs(grid, si, sj, count);

  function dfs(grid, i, j, n) {
    if (grid[i][j] === 2) {
      return n === 0 ? 1 : 0;
    }
    const r = grid.length,
      c = grid[0].length,
      t = grid[i][j];
    grid[i][j] = -1;
    let res = 0;
    for (const d of dir) {
      const ni = i + d[0];
      const nj = j + d[1];
      if (
        ni >= 0 &&
        ni < r &&
        nj >= 0 &&
        nj < c &&
        (grid[ni][nj] === 0 || grid[ni][nj] === 2)
      ) {
        res += dfs(grid, ni, nj, n - 1);
      }
    }
    grid[i][j] = t;
    return res;
  }
};
// @lc code=end
