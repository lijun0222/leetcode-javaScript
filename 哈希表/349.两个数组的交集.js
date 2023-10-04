/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  const nums1Set = new Set(nums1);
  const resetSet = new Set();

  for (let i = nums2.length; i >= 0; i--) {
    nums1Set.has(nums2[i]) && resetSet.add(nums2[i]);
  }
  return Array.from(resetSet);
};
// @lc code=end
