/* 

Word Length

Skriv funktioner som tar emot strängar och returnerar:

    Antalet bokstäver i ett ord i genomsnitt.
    Det kortaste ordet.
    Det längsta ordet.
    Det mittersta ordet.


*/
function letters_in_word(str) {
    let words = str.split(" ");

    let sum_letters_length = words.reduce( (acc, current) => acc + current.length, 0 );

    return (sum_letters_length / words.length);
}

function shortest_word(str) {
    let words = str.split(" ");
    let shortest_word = words[0];

    for ( let word of words ) {
        if ( word.length < shortest_word.length ) {
            shortest_word = word;
        }
    }

    return shortest_word;
}

function longest_word(str) {
    let words = str.split(" ");
    let longest_word = words[0];

    for ( let word of words ) {
        if ( word.length > longest_word.length ) {
            longest_word = word;
        }
    }

    return longest_word;
}

function middle_word(str) {
    let words = str.split(" ");

    let index = Math.floor(words.length / 2);

    return words[index];
}

let test = "Skriv funktioner som tar emot strängar och returnerar";
// console.log(letters_in_word(test));
// console.log(shortest_word(test));
// console.log(longest_word(test));
console.log(middle_word(test));