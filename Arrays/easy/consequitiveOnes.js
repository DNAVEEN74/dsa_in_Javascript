// find the maxioum consequtive ones in a array

function maxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

let arr = [1, 1, 0, 1, 1, 1, 0 ];
console.log(maxConsecutiveOnes(arr));