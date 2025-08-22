// COUNT NUMBER OF OCCURENCES IN A SORTED ARRAY
function lowerBound (nums, target) {
    let low = 0, high = nums.length - 1;
    let firstInd = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target) {
            firstInd = mid;
            high = mid - 1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return firstInd;
}

function countOccurences (nums, target) {
    let firstInd = lowerBound(nums, target);
    if (firstInd === -1) return [-1, -1];
    
    let lastInd = 0;
    let i = firstInd;

    while (nums[i] === target) {
        lastInd = i;
        i++;
    }

    let nofOccur = lastInd - firstInd + 1;
    return nofOccur;
}

let nums = [5,7,7,10];
console.log(countOccurences(nums, 8))