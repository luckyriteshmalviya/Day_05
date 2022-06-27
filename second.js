// To find a first pair whose sum is zero using indexing.

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

// let arr = [-3, -6, -7, -5, -4, 0, 1, 3, 5, 6, 9];
// function sumZeroByIndexing(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j >= 0; j--) {
//       if (arr[i] + arr[j] === 0) {
//         res.push(arr[i], arr[j]);
//         return res;
//       }
//     }
//   }
// }

// console.log(sumZeroByIndexing(arr));
