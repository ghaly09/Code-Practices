/**
 * Add Two Number Reverse
 * ===============
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
// Code by Rachmat Ghaly

var addTwoNumbers = function (l1, l2) {
  let l1Reverse = String(l1.reverse().join(""));
  let l2Reverse = String(l2.reverse().join(""));
  let resultNumber = String(Number(l1Reverse) + Number(l2Reverse));
  let resultArray = [];

  for (let i = 0; i < resultNumber.length; i++) {
    resultArray.push(resultNumber[i]);
  }

  return resultArray.reverse();
};

// Test Run
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

/**
 * OUTPUT EXAMPLE
 * 1
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
============
 * 2
Input: l1 = [0], l2 = [0]
Output: [0]

============
 * 3
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */
