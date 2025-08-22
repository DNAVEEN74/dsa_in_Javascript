
//BRUTE FORCE APPROACH
// function countInversion (nums) {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1 + 1; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }


//OPTIMAL SOLUTION --- USING MERGE SORT 
function countInversion (nums) {
    function sort(arr, low, high){
        let cnt = 0;
        if (low >= high) return cnt;
        let mid = (low + high) >> 1;

        cnt += sort(arr, low, mid);
        cnt += sort(arr, mid + 1, high);
        cnt += merge(arr, low, mid, high);
        return cnt;
    }

    function merge(arr, low, mid, high) {
        let left = low;
        let right = mid + 1;
        let temp = [];
        let count = 0;
        
        while(left <= mid && right <= high) {
            if ( arr[left] <= arr[right]){
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                count += (mid - left + 1);
                right++;
            }
        }

        while(left <= mid){
            temp.push(arr[left]);
            left++;
        }

        while(right <= high){
            temp.push(arr[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }

        return count;
    }
    return sort(nums, 0, nums.length -1)
}

let arr = [5,3,2,4,1];
console.log(countInversion(arr));