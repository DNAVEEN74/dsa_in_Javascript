let arr = [14, 9, 15, 12, 6, 8, 13];

function bubbleSort(arr) {
    for ( let i = arr.length - 1; i >= 1; i-- ) {
            let didSwap = 0;

            for ( let j = 0; j <= i-1; j++ ) {
                if( arr[j] > arr[j+1] ) {
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    didSwap = 1;
                }
            }

            if ( didSwap === 0 ) {
                break;
            }
        }
    return arr;
}

console.log(bubbleSort(arr));