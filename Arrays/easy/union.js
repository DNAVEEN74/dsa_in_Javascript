//find union of two arrays


//brute force approach 

// function findUinon (arr1, arr2) {
//     let mySet = new Set();
//     let unionArr = [];

//     for (let i = 0; i < arr1.length; i++) {
//         mySet.add(arr1[i]);
//     }
    
//     for (let i = 0; i < arr2.length; i++) {
//         mySet.add(arr2[i]);
//     }

//     mySet.forEach((value) => {
//         unionArr.push(value);
//     })

//     return unionArr;
// }

let arr1 = [1, 1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 5, 6, 7];

//optimised approach ----- two pointer method

function findUnion(arr1, arr2) {
    let unionArr = [];
    let prevValue = -1;

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]) {
            if (arr1[i] !== prevValue) {
                unionArr.push(arr1[i]);
                prevValue = arr1[i];
                i++;
            } else {
                i++;
            }
        } else {
            if(arr2[j] !== prevValue){
                unionArr.push(arr2[j]);
                prevValue = arr2[j];
                j++;
            } else {
                j++;
            }
        }
    }

    while(i < arr1.length){
        if(arr1[i] !== prevValue) {
            unionArr.push(arr1[i]);
            prevValue = arr1[i];
            i++;
        } else {
            i++;
        }
    }

    while(j < arr2.length){
        if(arr2[j] !== prevValue) {
            unionArr.push(arr2[j]);
            prevValue = arr2[j];
            j++;
        } else {
            j++;
        }
    }

    return unionArr;
}

console.log(findUnion(arr1, arr2));