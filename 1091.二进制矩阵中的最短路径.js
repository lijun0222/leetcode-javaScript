/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const queue = [[0, 0]];
  const dirs = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];
  const len = grid.length;
  if (grid[0][0] === 1 || grid[len - 1][len - 1] === 1) {
    return -1;
  }
  if (len === 1) {
    return 1;
  }
  let depth = 0;
  while (queue.length) {
    depth++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();
      if (x === len - 1 && y === len - 1) {
        return depth;
      }
      for (let dir of dirs) {
        let curX = x + dir[0];
        let curY = y + dir[1];
        if (
          curX > len - 1 ||
          curY > len - 1 ||
          curX < 0 ||
          curY < 0 ||
          grid[curX][curY] === 1
        ) {
          continue;
        }
        queue.push([curX, curY]);
        grid[curX][curY] = 1;
      }
    }
  }
  return -1;
};
// @lc code=end
