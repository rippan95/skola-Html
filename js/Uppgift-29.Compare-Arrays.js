/*
Skriv en funktion som tar emot två arrayer och returnerar en ny array som innehåller de värden som finns i båda arrayerna. Ex:
console.log(compare_arrays([1, 2, 3, 4, 5], [2, 3, 6])); // [2, 3]
*/

function compare_arrays(arr_a, arr_b) {
    return arr_a.filter(value => arr_b.includes(value));
}

console.log(compare_arrays([1, 2, 3, 4, 5], [2, 3, 6])); // [2, 3]
console.log(compare_arrays([2, 3, 6], [1, 2, 3, 4, 5])); // [2, 3]