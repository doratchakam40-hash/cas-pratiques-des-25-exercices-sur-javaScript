const add = (a, b) => {

 new Promise((resolve, reject) => {
    if (arguments.length < 2) {
        reject("Must provide two parameters");
    } else {
        resolve(a + b);
    }
    });
}