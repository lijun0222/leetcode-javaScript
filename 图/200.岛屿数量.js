/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// dfs方法
var numIslands = function (grid) {
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill().map(() => new Array(n).fill(false));

  const dfs = (grid, visited, x, y) => {
    for (let i = 0; i < 4; i++) {
      let nextX = x + dir[i][0];
      let nextY = y + dir[i][1];
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n) {
        continue;
      }
      if (!visited[nextX][nextY] && grid[nextX][nextY] === "1") {
        visited[nextX][nextY] = true;
        dfs(grid, visited, nextX, nextY);
      }
    }
  };

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        ++res;
        visited[i][j] = true;
        dfs(grid, visited, i, j);
      }
    }
  }
  return res;
};

// bfs方法
// var numIslands = function (grid) {
//   const dir = [
//     [0, 1],
//     [0, -1],
//     [1, 0],
//     [-1, 0],
//   ];

//   const bfs = (grid, visited, x, y) => {
//     let queue = [];
//     queue.push([x, y]);
//     visited[x][y] = true;
//     while (queue.length) {
//       let top = queue.shift();
//       console.log(top);
//       for (let i = 0; i < 4; i++) {
//         let nextX = top[0] + dir[i][0];
//         let nextY = top[1] + dir[i][1];
//         if (
//           nextX < 0 ||
//           nextX >= grid.length ||
//           nextY < 0 ||
//           nextY >= grid[0].length
//         ) {
//           continue;
//         }
//         if (!visited[nextX][nextY] && grid[nextX][nextY] === "1") {
//           queue.push([nextX, nextY]);
//           visited[nextX][nextY] = true;
//         }
//       }
//     }
//   };

//   const visited = new Array(grid.length)
//     .fill()
//     .map(() => new Array(grid[0].length).fill(false));
//   let res = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (!visited[i][j] && grid[i][j] === "1") {
//         ++res;
//         bfs(grid, visited, i, j);
//       }
//     }
//   }
//   return res;
// };

// @lc code=end
