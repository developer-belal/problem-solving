'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

let findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const findMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
// 3) ---------------------
// 
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// 
// ------------------------
const reverseArray = (arr) => {
    
    var rev = [];
    for (let y = 0; y < arr.length; y++) {
        rev.unshift(arr[y]);
    }
    return rev;
  


    
}

module.exports = {findMax , sumNums, reverseArray};