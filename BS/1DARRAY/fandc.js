// FLOOR AND CEIL
// FLOOR --- LARGET NUMBER IN ARRAY <= X
// CEIL --- SMALLEST NUMBER IN ARRAY >= X

function fandcSearch (nums, x) {
    let low = 0, high = nums.length - 1;
    let cInd = -1, fInd = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === x) {
            return [nums[mid], nums[mid]];
        }
        else if (nums[mid] > x) {
            cInd = mid;
            high = mid - 1;
        } else {
            fInd = mid;
            low = mid + 1;
        }
    }

    let floorVal = fInd !== -1 ? nums[fInd] : null;
    let ceilVal  = cInd !== -1 ? nums[cInd] : null;

    return [floorVal, ceilVal];
}

let nums = [3, 4, 4, 7, 8, 10];
console.log(fandcSearch(nums, 11));