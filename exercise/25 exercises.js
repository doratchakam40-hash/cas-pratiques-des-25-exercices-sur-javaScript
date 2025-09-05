// exercice 1
const randomNum = Math.floor(Math.random() * 10) + 1;

// Ask the user for a guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

// Check if the guess is correct
if (userGuess === randomNum) {
  alert("Good Work");
} else {
  alert("Not matched. The correct number was " + randomNum);
}

// exercice 2
const daysUntilChristmas = () => {
     const today = new Date();
  let year = today.getFullYear();
  let christmas = new Date(year, 11, 25);
  if (today > christmas) {
    christmas = new Date(year + 1, 11, 25);
}
const diffTime = christmas - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
console.log("Days left until Christmas:", daysUntilChristmas());

// exercice 3
const multiplyAndDivide = (a, b) => {
    return (a * b) / 2;
}
console.log(multiplyAndDivide(4, 6)); // 12

// exercice 4
const findLongestNumber = (array) => {
    return Math.max(...array.map(num => num.toString().length));
}
console.log(findLongestNumber([3, 56, 789, 12, 890])); // 3 (car 789 et 890 ont 3 chiffres)

// exercice 5
const getLargestNumber = (array) => {
    return Math.max(...array);
}
console.log(getLargestNumber([3, 5, 7, 2, 8])); // 8

// exercice 6
const removeDoublons = (str) => {
    return str.spit("").filter((caractere, _, arr) => arr.indexOf(caractere) === arr.lastIndexOf(caractere)).join("");
}
console.log(removeDoublons("abacddbec")); // "e"
// "e" est le seul caractere qui n'a pas de doublon

// exercice 7
const computeSumCube = () => {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i ** 3;
    }
    return sum;
}
console.log(computeSumCube()); // 225

// exercice 8
const compareTwoObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 3 })); // false
console.log(compareTwoObjects({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // false

// exercice 9
const filterValues = (array, values) => {
    return array.filter(item => !values.includes(item));
}
console.log(filterValues(['a', 'b', 'c', 'd', 'e'], ['b', 'd'])); // ['a', 'c', 'e']

// exercice 10
const extractValue = (Array, indexs) => {
    Array.map(indexs => Array[indexs]);
}
console.log(extractValue(['a', 'b', 'c', 'd', 'e'], [1, 3])); // ['b', 'd']

// exercice 11
const deleteRollno = (obj) => {
    delete obj.rollno;
    return obj;
}
console.log(deleteRollno({ name: "John", rollno: 123, age: 20 })); // { name: 'John', age: 20 }

// exercice 12
class cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        returnvolume.toFixed(4);
    }

}
const cyl = new cylinder(4, 5);
console.log(cyl.getVolume());

// exercice 13
const clock = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds =now.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    console.log(`" ${hours}:${minutes}:${seconds} "`);
    
}
setInterval(clock, 1000);
// exercice 14
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

// exercice 15
const add = (a, b) => {

 new Promise((resolve, reject) => {
    if (arguments.length < 2) {
        reject("Must provide two parameters");
    } else {
        resolve(a + b);
    }
    });
}

// exercice 15.1
const euler = 2.7183;

// exercice 15.2
const findMax = (array) => {
    Math.max(...array);
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7]));//

// exercice 15.3
const modele = (product, price, quantity) => {
let total = price * quantity;
return `You purchased ${quantity} units of ${product} for a total price of ${total} cfa`;
}
console.log(modele("Mouse", 1500, 3));//

// exercice 15.4
const combinedArr = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(combinedArr([3, 1, 4], [2, 5, 0])); // [0, 1, 2, 3, 4, 5]

// exercice 15.5
const createCar = (make, model, year = "unknow") => {
    return { make, model, year};
};
const car = createCar("4x4", "Corolla");
console.log(car);

// exercice 15.6
const calculateArea = (radius) => {
    if (radius === undefined) {
    throw new Error("Radis is missing !");
    }
    return Math.PI * radius * radius;
};

// exercice 15.7
const average = (...scores) => {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

// exercice 15.8
const words = ["Dora", "Angel", "Chloée"];
const reverseWords = words.map(word => word.split("").reverse().join(""));
console.log(reverseWords);

// exercice 15.9
const books = [ 
    { title: "elite", pages: 300 },
    { title: "safca", pages: 250 },
    { title: "blue", pages: 350 },
    { title: "orange", pages:310 }
];

const bigBooks = books.filter(book => book.pages > 300);
console.log(bigBooks);

// exercice 15.10
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfuly !");
        }, 2000);
    });
}