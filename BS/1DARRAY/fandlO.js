// FIND FIRST AND LAST OCCURENCES OF A GIVEN TARGET IN A ARRAY

// USING BOTH LOWER AND UPPER BOUD --- BINEARY SEARCH METHODS
// function lbsearch (nums, target){
//     let low = 0, high = nums.length - 1;
//     let ans = nums.length;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] >= target) {
//             ans = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return ans;
// }

// function upSearch (nums, target) {
//     let low = 0, high = nums.length - 1;
//     let ans = nums.length;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] > target) {
//             ans = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return ans;
// }

// function fandlO (nums, target) {
//     let lb = lbsearch(nums, target);
//     if(lb === nums.length || nums[lb] !== target) return [-1, -1];
//     else return [lb, upSearch(nums, target) - 1];
// }



// USING ONLY LOWER BOUND METHOD --- MY OWN IMPLEMENTATION
// function lbsearch (nums, target){
//     let low = 0, high = nums.length - 1;
//     let ans = nums.length;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] >= target) {
//             ans = mid;
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }

//     return ans;
// }

// function fandlO (nums, target) {
//     let lbInd = lbsearch(nums, target);
//     if(lbInd === nums.length || nums[lbInd] !== target) return [-1, -1];

//     let i = lbInd;
//     let ubInd = 0;

//     while (nums[i] === target) {
//         ubInd = i;
//         i++;
//     }

//     return [lbInd, ubInd];

// }

//IMPLEMENTING ONLY USING BINEARY SEARCH, NOT USING ANY LB OR UP PREWRITTEN CODE OR METHODS

function fandlO (nums, target) {
    
}

let nums = [5,7,7,8,8,10];
console.log(fandlO(nums, 8));