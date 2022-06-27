// To find a first pair from a number array whose sum is zero.

/**
 * Step 01 - Create a function - sumZero.
 * Step 02 - Create a blank array for storing result - res.
 * Step 03 - Create a loop starting from 0 index (i=0) to end of the array.
 * Step 04 - Again Create a loop starting from (j= i+1) so in both the loop same value not come at a time.
 * Step 05 - Check whether in any condition that the sum of i index and j ndex is equals to 0.
 * Step 06 - If yes then push the both valur in res.
 * Step 07 - Return the res.
 */
let arr = [-8, -6, -3, 0, 6, 3, 9];
function sumZero(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        res.push(arr[i], arr[j]);
        return res;
      }
    }
  }
}
console.log(sumZero(arr)); // output => [-6,6]
