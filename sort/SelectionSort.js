// Use this function to implement SelectionSort

const SelectionSort = function (array) {
    let mininum = array[0];
    for (let i = 1; i < array.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[lowest] > array[j]) lowest = j;
        }
        if (i !== lowest) {
            const temp = array[lowest];
            array[lowest] = array[j];
            array[j] = temp;
        }
    }
    return array;
};
