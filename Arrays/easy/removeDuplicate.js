let arr = [1,1,2];

// using Hash method ------ brute force approach
// function removeDuplicates(arr) {
//     let mySet = new Set();
    
//     for(let i = 0; i < arr.length; i++) {
//         mySet.add(arr[i]);
//     }

//     let index = 0;
//     mySet.forEach((value) => {
//         arr[index] = value;
//         index++;
//     })

//     return arr.slice(0, index);
// }


//using two pointer method ------- optimised approach

function removeDuplicates(arr) {
    let i = 0;
    let j = 1;

    while(j < arr.length) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
            j++;
        } else {
            j++;
        }
    }

    return arr.slice(0, i + 1);
}

console.log(removeDuplicates(arr));