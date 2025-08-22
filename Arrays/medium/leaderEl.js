//FINDING LEADER IN A ARRAY ---- EVERYTHING TO THE RIGHT IS SMALLER THAN IT

//BRUTE FORCE APPROACH
// function findLeader(nums) {
//     let output = [];

//     for (let i = 0; i < nums.length; i++) {
//         let isLeader = true;

//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] > nums[i]) {
//                 isLeader = false;
//                 break;
//             }
//         }

//         if (isLeader) {
//             output.push(nums[i]);
//         }
//     }

//     return output;
// }

//OPTIMAL APPROACH
function findLeader(nums) {
    let output = [];
    let prevMax = nums[nums.length - 1];
    output.push(prevMax);

    for (let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] > prevMax) {
            prevMax = nums[i];
            output.push(nums[i]);
        }
    }

    return output.reverse();
}

let arr = [10,22,12,3,0,6]
console.log(findLeader(arr));