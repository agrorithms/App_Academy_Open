/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

let mapMutator = function(arr,cb) {
    for (let i=0; i<arr.length; i++){
        arr[i]=cb(arr[i],i);

        }
    return arr
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mapMutator;
