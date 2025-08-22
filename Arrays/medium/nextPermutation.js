//FINDING THE NEXT PERMUTATION OF AN ARRAY
//BRUTE FORCE APPROACH
//STEP-1: FIND ALLTHE PERMUTATIONS OF THE ARRAY
//STEP-2: LINEAR SEARCH THE GIVEN ARRAY IN THE PERMUTATIONS
//STEP-3: RETURN THE NEXT PERMUTAION OR RETURN THE FIRST PERMUTATION IF THE GIVEN ARRAY IS THE LAST PERMUTATION

//OPTIMAL APPROACH
function nextPermutation(nums) {
    let index = -1;

    for (let i = nums.length -2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        nums.reverse();
        return nums;
    }

    for (let i = nums.length -1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
}

let nums = [2,1,5,4,3,0,0];
console.log(nextPermutation(nums));