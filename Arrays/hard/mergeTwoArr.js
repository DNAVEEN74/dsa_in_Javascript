//MERGE TWO SORTED ARRAYS

//MY APPROACH --- MOST OPTIMAL APPROACH
function mergeTwoSortedArrays (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[(nums1.length - n) + i] = nums2[i];
    }

    nums1.sort((a, b) => a -b);
    return nums1;
}

//

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

console.log(mergeTwoSortedArrays(nums1, 3, nums2, 3));