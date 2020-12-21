/*
Skriv en funktion som tar emot två arrayer som parametrar och lägg till den ena arrayens innehåll i den andra arrayen och returnerar den med hjälp av spread-operatorn.
Tips: https://davidwalsh.name/spread-operator
*/

function combine_arrays(arr_a, arr_b) {
    return [...arr_a, ...arr_b];
}

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];

console.log(combine_arrays([1, 2, 3, 4], [5, 6, 7, 8]));