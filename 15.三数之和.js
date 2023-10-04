/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return result;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    while (right > left) {
      if (nums[i] + nums[left] + nums[right] > 0) right--;
      else if (nums[i] + nums[left] + nums[right] < 0) left++;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        // 去重逻辑应该放在找到一个三元组之后，对b 和 c去重
        while (right > left && nums[left] === nums[left + 1]) left++;
        while (right > left && nums[right] === nums[right - 1]) right--;

        right--;
        left++;
      }
    }
  }
  return result;
};
// @lc code=end
