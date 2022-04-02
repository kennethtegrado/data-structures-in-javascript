// Use this function to implement bubble sort

// Bubble Sort without Optimization
const BubbleSort = function (array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

// Bubble Sort with Optimization
const BubbleSortOptimization = function (array) {
    let noSwaps;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
};
