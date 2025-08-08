let arr = [1,9,6,8,5,4,0];

function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = (low + high) >> 1;
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
    return arr;
}

function merge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid){
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low] 
    }
}


console.log(mergeSort(arr, 0, arr.length - 1));