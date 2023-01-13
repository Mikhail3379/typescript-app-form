"use strict";

// there are a number of tiles on the floor , each numbered with a different non-negative integer.
// you are given an array of integers representing the tiles.
// you are initially standing on the first tile.
// each tile is the set represents your maximum jump length from that position.
// determine if you can reach the last tile.

//  start   end
//  1       n
//  0       n-1
// [1,4,1,2,3]    true   Y
// []             false  Y
// [1]            true   Y
// [9]            true   Y
// [0]            true   Y
// [0,1]          false  Y
// [1,0,900]      false  Y
// [1,2,0,1,0]    true   Y
//
// i = 0;
// while i < nums.length
//     if i == nums.length - 1 // i'm at the end
//         return true; // success
//     else
//        if nums[i] == 0
//            return false; // fail
//        i = i + nums[i]
//        if i >= nums.length
//           return true; // success
//
// return false;
//
// Asymtoptic notation = how an algorithm behaves on the size of the input
//   O(n) = n steps... 3 -> 3*n + log(n) -> O(n)
//   for for n => O(n^2)


// [1,4,1,2,3]
// [1,0,1,2,3]
//      i
//    r
//
//  i    reach
//  0    0 -> 1
//  1    1 -> 1
//  2    1 -> 2 XXXX
//
// []             false  Y
// [1]            true   Y
// [9]            true   Y
// [0]            true   Y
// [0,1]          false  Y
// [1,0,900]      false  Y
// [1,2,0,1,0]    true   Y

function canReachEnd(nums) {
  let reach = 0;
  for (let i = 0; i < nums.length /* INVARIANT 1 */ ; i++) {
    if (i > reach /* INVARIANT 2 */) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true; /* SUCCESS CRITIERIA i ==  nums.length */
}
canReachEnd([1,2,3]);
console.log(canReachEnd([1,2,3]));