const compareTwoObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // false