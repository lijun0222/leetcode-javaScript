/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const cities = isConnected.length;
  const visited = new Set();
  let provinces = 0;

  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, cities, i);
      provinces++;
    }
  }
  return provinces;
};

const dfs = (isConnected, visited, cities, i) => {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      visited.add(j);
      dfs(isConnected, visited, cities, j);
    }
  }
};
// @lc code=end
