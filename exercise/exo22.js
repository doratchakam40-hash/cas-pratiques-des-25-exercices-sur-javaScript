const findLongestNumber = (array) => {
    return Math.max(...array.map(num => num.toString().length));
}
console.log(findLongestNumber([3, 56, 789, 12, 890])); // 3 (car 789 et 890 ont 3 chiffres)