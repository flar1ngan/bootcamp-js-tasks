// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values. Sort the merge result in ascending order Return the resulting array

function mergeArray(a, b) {
  const mergedArr = a.concat(b).sort();
  const uniqueArr = [...new Set(mergedArr)];
  return uniqueArr;
}

const arr1 = [4, 1, 2];
const arr2 = [3, 2, 4];

console.log(mergeArray(arr1, arr2));
