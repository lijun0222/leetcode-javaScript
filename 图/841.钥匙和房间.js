/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

// dfs
// var canVisitAllRooms = function (rooms) {
//   const visited = new Array(rooms.length).fill(false);

//   const dfs = (rooms, key, visited) => {
//     if (visited[key]) return;
//     visited[key] = true;
//     for (let k of rooms[key]) {
//       dfs(rooms, k, visited);
//     }
//   };

//   dfs(rooms, 0, visited);
//   // 检查是否都访问到了
//   for (let i of visited) {
//     if (!i) {
//       return false;
//     }
//   }
//   return true;
// };

// bfs
var canVisitAllRooms = function (rooms) {
  const bfs = (rooms) => {
    const visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    const queue = [];
    queue.push(0);
    while (queue.length > 0) {
      let key = queue.shift();
      for (let k of rooms[key]) {
        if (!visited[k]) {
          queue.push(k);
          visited[k] = true;
        }
      }
    }
    for (let i of visited) {
      if (!i) {
        return false;
      }
    }
    return true;
  };
  return bfs(rooms);
};
// @lc code=end
