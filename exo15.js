const deleteRollno = (obj) => {
    delete obj.rollno;
    return obj;
}
console.log(deleteRollno({ name: "John", rollno: 123, age: 20 })); // { name: 'John', age: 20 }