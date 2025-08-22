function findMax (piles) {
    piles.sort((a, b) => a - b);
    return piles[piles.length - 1];
 }

function requiredTime (piles, mid) {
    let totalHrs = 0;

    for (let i = 0; i < piles.length; i++) {
        totalHrs += Math.ceil(piles[i] / mid);
    }

    return totalHrs;
}

var minEatingSpeed = function(piles, h) {
    let low = 1, high = findMax(piles);
    let ans = 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalTime = requiredTime(piles, mid);
        if(totalTime <= h) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    
    return ans;
};


let piles = [3,6,7,11]
let h = 8;
console.log(minEatingSpeed (piles, h));