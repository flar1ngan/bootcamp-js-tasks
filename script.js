// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result

function sum(a, b) {
  return a + b;
}

//console.log(sum(5, 6));

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

function stringExtract(s) {
  return s.slice(-3);
}

//console.log(stringExtract("hello"));

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function numberSplitToArray(a){
  let digits = a.toString().split("");
  return digits.map(Number);
}

//console.log(numberSplitToArray(1000));

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

function returnLastElem(a, n) {
  return a.slice(-n);
}

// const myArray = [1,2,3,4,5];
// returnLastElem(myArray, 3);

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values. Sort the merge result in ascending order Return the resulting array

function mergeArray(a, b) {
  const mergedArr = a.concat(b).sort();
  const uniqueArr = [...new Set(mergedArr)];
  return uniqueArr;
}

// const arr1 = [4, 1, 2];
// const arr2 = [3, 2, 4];

// console.log(mergeArray(arr1, arr2));

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

//console.log(strObjCompare(person, 'age'));