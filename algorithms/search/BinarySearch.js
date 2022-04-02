// Use binary search to find if an element exists inside an array and to find its index on a sorted array

const BinarySearch = function (array, element) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor(right / 2);

    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (array[mid] > element) right = mid - 1;
        else if (array[mid] < element) left = mid + 1;
        else return mid;
    }
    return -1;
};

// Checking binary search
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 5));
