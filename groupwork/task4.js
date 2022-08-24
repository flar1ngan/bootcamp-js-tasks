// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

function returnLastElem(a, n) {
    return a.slice(-n);
}

const myArray = [1,2,3,4,5];
returnLastElem(myArray, 3);