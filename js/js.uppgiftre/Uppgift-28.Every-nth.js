/*
Skriv en funktion som returnerar en array med var n:de element i en array. Ex:
console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1, 2, 3, 4, 5, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); // [4]
Det kan vara lämpligt att använda filter-metoden.
*/

function every_nth(arr, number) {
    return arr.filter(value => value % number === 0);
}

console.log(every_nth([1, 2, 3, 4, 5, 6], 1)); // [1, 2, 3, 4, 5, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); // [3, 6]
console.log(every_nth([1, 2, 3, 4, 5, 6], 4)); // [4]