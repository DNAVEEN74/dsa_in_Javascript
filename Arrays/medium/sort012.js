// SORTING AN ARRAY CONTAINING ONLY 0'S, 1'S AND 2'S
// BRUTE FORCE APPROACH WILL BE TO USE ANY SORTING ALGORTIHM --- MY CHOICE IS QUICK SORT SO THAT SC = O(1)

//BTTER SOLUTION 
//TC = O(2N), SC = O(1)

// function sort012(arr) {
//     let zerosCount = 0;
//     let onesCount = 0;
//     let twosCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === 0) {
//             zerosCount++;
//         } else if(arr[i] === 1) {
//             onesCount++;
//         } else {
//             twosCount++;
//         }
//     }

//     for (let i = 0; i < zerosCount; i++) {
//         arr[i] = 0;
//     }

//     for (let i = zerosCount; i < zerosCount + onesCount; i++) {
//         arr[i] = 1;
//     }

//     for (let i = zerosCount + onesCount; i < arr.length; i++) {
//         arr[i] = 2;
//     }

//     return arr;
// }


//OPTIMAL SOLUTION

function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high) {
        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;

            high--;
        }
    }

    return arr;
}

let arr = [1, 0, 2, 1, 0];
console.log(sort012(arr));