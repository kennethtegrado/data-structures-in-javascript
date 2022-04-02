// Linear Search is used to iterate every element of an array
const LinearSearch = (array, element) => {
    let i = 0;
    for (const item of array) {
        if (item === element) return i;
        i++;
    }
    return -1;
};

// Check where is 6 in our array
console.log(LinearSearch([1, 8, 6, 7], 6));
// Returns 2

console.log(LinearSearch([1, 8, 6, 7], 5));
// Returns -1
