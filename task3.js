// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

function numberSplitToArray(a){
    let digits = a.toString().split("");
    return digits.map(Number);
}

numberSplitToArray(1000);