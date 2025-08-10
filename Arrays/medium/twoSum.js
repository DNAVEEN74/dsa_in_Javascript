// two sum
//brute force solution 
// TC = O(n^2)
// function twoSum(arr, target) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 output.push(i, j);
//                 break;
//             }
//         }
//     }

//     return output;
// 

//optimized solution --- two pointer approach
// THIS WORKS ONLY IF THE ARRAY IS SORTED
// function twoSum(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;
//     let output = [];

//     while(i < j) {
//         let sum = arr[i] + arr[j];
//         if (sum === target){
//             output.push(i, j);
//             break;
//         } else if (sum < target) {
//             i++;
//         } else {
//             j--;
//         }
//     }

//     return output;
// }

//BETTER SOLUTION ---- USING HASH MAPS ---- IF ARRAY IS NOT SORTED USE THIS METHOD

function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let needed = target - arr[i];

        if(map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(arr[i], i);
    }

    return [];
}

let arr = [1, 6, 2, 10, 3];
console.log(twoSum(arr, 7));