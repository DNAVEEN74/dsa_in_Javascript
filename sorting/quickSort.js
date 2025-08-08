function qs(arr, low, high) {
    if (low >= high) return;
    let pivot = partition(arr, low, high);
        qs(arr, low, pivot -1);
        qs(arr, pivot + 1, high);
        return arr;
}

function partition (arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    
    while (i<j) {
        while (arr[i] <= pivot && i < high) {
            i++;
        }

        while (arr[j] > pivot && j > low) {
            j--;
        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

let arr = [7, 4, 1, 5, 3];
qs(arr, 0, arr.length - 1)
console.log(arr);