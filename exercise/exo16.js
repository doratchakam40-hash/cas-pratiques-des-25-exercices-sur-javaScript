const extractValue = (Array, indexs) => {
    Array.map(indexs => Array[indexs]);
}
console.log(extractValue(['a', 'b', 'c', 'd', 'e'], [1, 3])); // ['b', 'd']