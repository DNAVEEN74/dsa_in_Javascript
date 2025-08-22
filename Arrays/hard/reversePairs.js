// REVERSE PAIRS
// i > j && arr[i] > 2 * arr[j]

//BRUTE FORCE APPROACH
// TC - O(N^2), SC - O(1)
// function findReversePairs (nums) {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ( nums[i] > 2 * nums[j]) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

//OPTIMAL SOLUTION

function findReversePairs(arr, low, high) {

    let cnt = 0;
    if (low >= high) return cnt;

    let mid = (low + high) >> 1;
    cnt += findReversePairs(arr, low, mid);
    cnt += findReversePairs(arr, mid + 1, high);
    cnt += countPairs(arr, low, mid, high);
    merge(arr, low, mid, high);
    return cnt;
}

function countPairs (arr, low, mid, high) {
    let cnt = 0;
    let right = mid + 1;

    for (let i = low; i <= mid; i++) {
        while (right <= high && arr[i] > 2 * arr[right]) right++;
        cnt += (right - (mid + 1));
    }

    return cnt;
}

function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid){
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low] 
    }
}

let nums = [1,3,2,3,1];
console.log(findReversePairs(nums, 0, nums.length - 1));