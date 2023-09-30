/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const m = grid.length,
    n = grid[0].length;

  let sum = 0; // 陆地数量
  let cover = 0; // 相邻数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (grid[i][j] === 1) {
        sum++;
        // 统计上边相邻陆地
        if (i - 1 >= 0 && grid[i - 1][j] === 1) cover++;
        // 统计左边相邻陆地
        if (j - 1 >= 0 && grid[i][j - 1] === 1) cover++;
      }
    }
  }
  return sum * 4 - cover * 2;
};
// @lc code=end
