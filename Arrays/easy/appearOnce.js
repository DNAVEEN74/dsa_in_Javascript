// find the number that appears only once in an array where every other number appears twice

//brute force solution
// TC = O(n^2)
// SC = O(1)
// function appearOnce(arr) {
//     for ( let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let count = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === num) {
//                 count++;
//             }
//         }

//         if (count === 1) return num;
//     }
// }

// better solution ---- using a hash array
// TC = O(3n), SC = )(maxNum)
function appearOnce(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }

    let hashArray = new Array(maxNum).fill(0);

    for (let i = 0; i < arr.length; i++) {
        hashArray[arr[i] - 1]++;
    }

    for (let i = 0; i < hashArray.length; i++) {
        if(hashArray[i] === 1) {
            return i + 1;
        }
    }
}

//optimised solution --- xor approach
function appearOnce(arr) {
    let xor = 0;

    for(let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
    }

    return xor;
}

let arr = [1, 1, 2, 3, 3, 4, 4];
console.log(appearOnce(arr));