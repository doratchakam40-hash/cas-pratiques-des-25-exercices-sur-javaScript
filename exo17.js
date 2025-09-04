const filterValues = (array, values) => {
    return array.filter(item => !values.includes(item));
}
console.log(filterValues(['a', 'b', 'c', 'd', 'e'], ['b', 'd'])); // ['a', 'c', 'e']