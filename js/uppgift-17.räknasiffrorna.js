/* 

Count Words

Skapa en funktion som räknar ord i en sträng.

*/

function count_words(str) {
    return str.split(" ").length;
}

console.log(count_words("Detta är en mening som innehåller åtta ord."));