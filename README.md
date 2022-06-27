# Day_05
Solution of question from day-05 from 24 days-GitHub challenge


## To find a first pair from a number array whose sum is zero.  
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



##  To find a first pair whose sum is zero using indexing.

let arr = [-3, -2, -1, -5, -4, 0, 1, 5, 6, 9, 4];  
function sumZeroByIndexing(arr) {  
  let res = [];  
  for (let i = 0; i < arr.length; i++) {  
    for (let j = arr.length - 1; j >= 0; j--) {  
      if (arr[i] + arr[j] === 0) {  
        res.push(arr[i], arr[j]);  
        return res;  
      } else {  
        i = i + 1;  
      }  
    }  
  }  
}  
console.log(sumZeroByIndexing(arr));  



## To find the largest pair of the 2 elements using indexing with unsorted elements.  
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



