// To find the largest pair of the 2 elements using indexing with unsorted elements.

/**
 * Step 01 - Create a function - largestPart.
 * Step 02 - Creat a blank array - res for storing result.
 * Step 2.1- Create a variable - max for perform check.
 * Step 03 - Start an Iteration on input starting from 0 index (i=0) to end of array.
 * Step 04 - Start an another Iteration starting from next index to i (j=i+1) to end of array.
 * Step 05 - Sum the number of both the current value of loop.
 * Step 06 - Check wheather the sum is maximum than value of max variable.
 * Step 07 - If yes then replace this value with the present value of max variable.
 * Step 7.1- Replace both the current value of loop to the present value of res array.
 * Step 08 - Return the res.
 */

let arr = [40, 8, 2, 777, 37, 555, 78];
function largestPair(arr) {
  let res = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum > max) {
        max = sum;
        res = [arr[i], arr[j]];
      }
    }
  }
  return res;
}
console.log(largestPair(arr));
