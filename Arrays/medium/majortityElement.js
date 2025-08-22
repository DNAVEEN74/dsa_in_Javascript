// MAJORITY ELEMENT >N/2 TIMES
//BRUTE FORCE APPROACH

// function majorityElement(nums) {

//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[j] === nums[i]) {
//                 count++;
//             }
//         }

//         if (count > nums.length / 2) {
//             return nums[i];
//         }
//     }

//     return -1;
// }


//BETTER APPROACH USING HASHMAP
//
// function majorityElement(nums) {
//     let myMap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         if (myMap.has(nums[i])) {
//             myMap.set(nums[i], myMap.get(nums[i]) + 1);
//         } else {
//             myMap.set(nums[i], 1);
//         }
//     }

//     for (let [key, value] of myMap) {
//         if (value > nums.length / 2) {
//             return key;
//         }
//     }

// }

//OPTIMAL APPROACH USING MOORE'S VOTING ALGORITHM

function majorityElement(nums) {
    let count = 0;
    let element;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count = 1;
            element = nums[i];
        } else if (nums[i] === element) {
            count++;
        } else {
            count--;
        }
    }

    return element;
}

let arr = [2,2,3,3,1,2,2];
console.log(majorityElement(arr));