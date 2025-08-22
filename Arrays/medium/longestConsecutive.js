// FIND THE LONGEST CONSECUTIVE 
//BETTER FORCE APPROACH

function longestConsecutive(nums) {
    if (!nums.length) return 0;
    nums = nums.sort((a, b) => a - b);
    let maxCnt = 1, cnt = 1, prev = nums[0];
    let i = 1;
    
    while (i < nums.length) {
        if (nums[i] === prev) i++;

        if (nums[i] === prev + 1) {
            cnt++;
            prev = nums[i];
            maxCnt = Math.max(maxCnt, cnt);
            i++;
        }

        if ( nums[i] !== prev + 1 && nums[i] !== prev) {
            cnt = 1;
            prev = nums[i];
            i++;
        }
    }

    return maxCnt;
}


//OPTIMAL APPROACH
function longestConsecutive(nums) {

}

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));