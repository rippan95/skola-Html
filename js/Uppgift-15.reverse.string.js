/* 

Reverse String

Skriv en funktion som vänder på en sträng.

*/

function reverse_string(str) {
    let result = "";

    for ( let char of str ) {
        result = char + result;
    }
    return result;

    /*
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    */

    // return str.split("").reverse().join("");
}

//console.log(reverse_string("hello"));
console.log(reverse_string("lorem ipsum"));