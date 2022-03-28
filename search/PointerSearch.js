// This is my own implementation of two pointer search for unsorted arrays

// It uses the divide and conquer strategy

const PointerSearch = function (array, element) {
    for (
        let left = 0, right = array.length - 1;
        left <= right;
        left++, right--
    ) {
        if (array[left] === element) return left;
        if (array[right] === element) return right;
    }
    return -1;
};

console.log(PointerSearch([6, 7, 9, 10, 12, 1, 3], 12));
