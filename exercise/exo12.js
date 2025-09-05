const isLowerCase = (str) => {
    if (typeof str !== "string") {
        return false;
    }
    return str === str.toLowerCase();
}
console.log(isLowerCase("hello")); // true
console.log(isLowerCase("Hello")); // false
console.log(isLowerCase("HELLO")); // false
console.log(isLowerCase("hello world")); // true