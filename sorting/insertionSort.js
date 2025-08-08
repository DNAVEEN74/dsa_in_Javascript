function insertionSort(nums){
    for (let i = 1; i <= nums.length - 1; i++){
           let j = i;
            while(j>0 && nums[j-1] > nums[j]){
                let temp = nums[j-1];
                nums[j-1] = nums[j];
                nums[j] = temp;
                j--
            }
        }
        return nums
}

let nums = [7, 4, 1, 5, 3]
console.log(insertionSort(nums));