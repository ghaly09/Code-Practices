/**
 * Two Sum Checker
 * ===============
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
// Code by Rachmat Ghaly

var twoSum = function (nums, target) {
  let result = [];
  nums.filter((value, index) => {
    for (let i = 0; i < nums.length; i++) {
      const newLocal = value * target;
      if (value + (index != i ? nums[i] : newLocal) == target) {
        return result.push(index);
      }
    }
  });

  return result;
};

// Test Run
// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-10, -1, -18, -19], -19));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-11, 7, 3, 2, 1, 7, -10, 11, 21, 3], 11));
console.log(twoSum([0, 3, -3, 4, -1], -1));
// twoSum([-10, -1, -18, -19], -19);

/**
 * OUTPUT EXAMPLE
 * 1
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
============
 * 2
Input: nums = [3,2,4], target = 6
Output: [1,2]

============
 * 3
Input: nums = [3,3], target = 6
Output: [0,1]
 */
