// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const person = {
  name: "Vlad",
  age: "19",
};

function strObjCompare(a, b) {
    if (a.hasOwnProperty(b)){
        return true;
    } else {
        return false;
    }
}

console.log(strObjCompare(person, 'age'));