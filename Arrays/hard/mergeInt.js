// FINDING MERGE INTERVALS

// OPTIMAL APPROACH
function findMergeIntervals (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    ans.push(nums[0]);

    for (let i = 0; i < nums.length; i++) {
        let last = ans[ans.length - 1];
        let curr = nums[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            ans.push(curr);
        }
    }

    return ans;
}

let nums = [[1,3],[2,6],[8,10],[15,18]];
console.log(findMergeIntervals(nums));