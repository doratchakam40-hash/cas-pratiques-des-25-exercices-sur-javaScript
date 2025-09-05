const combinedArr = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(combinedArr([3, 1, 4], [2, 5, 0])); // [0, 1, 2, 3, 4, 5]