// 3SUM -- CONSECUTIVE ELEMENTS OF A ARRAY WHOSE SUM IS EQUAL TO ZERO
// BRUTE FORCE

// function threeSum(nums) {
//     let ans = [];
//     let mySet = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if ( nums[i] + nums[j] + nums[k] === 0) {
//                     let temp = [nums[i], nums[j], nums[k]];
//                     temp.sort((a, b) => a - b);
//                     mySet.add(JSON.stringify(temp));
//                 }
//             }
//         }
//     }

//     for ( let item of mySet) {
//         ans.push(JSON.parse(item));
//     }

//     return ans;
// }

// function threeSum(nums) {
//     let ans = [];
//     let mySet = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         let hashSet = new Set();
//         for (let j = i + 1; j < nums.length; j++) {
//             let third = - (nums[i] + nums[j]);

//             if ( hashSet.has(third)) {
//                 let temp = [nums[i], nums[j], third];
//                 temp.sort((a, b) => a - b);
//                 mySet.add(JSON.stringify(temp));
//             } else {
//                 hashSet.add(nums[j]);
//             }
//         }
//     }

//     for ( let item of mySet) {
//         ans.push(JSON.parse(item));
//     }

//     return ans;
// }


//OPTIMAL APPROCH USING TWO POINTER
function threeSum(nums) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if ( i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while ( j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while(j < k && nums[j] === nums[j - 1]) { j++ };
                while(k > j && nums[k] === nums[k + 1]) { k-- };
            }
        }
    }

    return ans;
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));