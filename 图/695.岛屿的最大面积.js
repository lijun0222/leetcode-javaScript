/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs版本
// var maxAreaOfIsland = function (grid) {
//   const dir = [
//     [-1, 0],
//     [0, -1],
//     [1, 0],
//     [0, 1],
//   ];
//   const visited = new Array(grid.length)
//     .fill()
//     .map(() => new Array(grid[0].length).fill(false));
//   const dfs = (grid, visited, x, y, m) => {
//     for (let i = 0; i < 4; i++) {
//       let nextX = x + dir[i][0];
//       let nextY = y + dir[i][1];
//       if (
//         nextX < 0 ||
//         nextX >= grid.length ||
//         nextY < 0 ||
//         nextY >= grid[0].length
//       ) {
//         continue;
//       }
//       if (!visited[nextX][nextY] && grid[nextX][nextY] === 1) {
//         visited[nextX][nextY] = true;
//         m = dfs(grid, visited, nextX, nextY, m + 1);
//       }
//     }
//     return m;
//   };
//   let max = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (!visited[i][j] && grid[i][j] === 1) {
//         visited[i][j] = true;
//         let area = dfs(grid, visited, i, j, 1);
//         if (area > max) {
//           max = area;
//         }
//       }
//     }
//   }
//   return max;
// };

var maxAreaOfIsland = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count = Math.max(count, areaOfIsland(grid, i, j, m, n));
      }
    }
  }
  return count;
};

var areaOfIsland = function (grid, i, j, m, n) {
  if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === 0) return 0;
  let num = 1;
  grid[i][j] = 0;
  num += areaOfIsland(grid, i + 1, j, m, n);
  num += areaOfIsland(grid, i - 1, j, m, n);
  num += areaOfIsland(grid, i, j + 1, m, n);
  num += areaOfIsland(grid, i, j - 1, m, n);
  return num;
};
// @lc code=end
