// Use this function to implement insertion sort

const InsertionSort = function (array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            arr[j + 1] = arr[j];
        }
    }
    return array;
};
