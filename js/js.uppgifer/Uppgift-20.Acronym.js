/* 

Acronym

    Skapa en funktion som tar emot en sträng och skapar en förkortning genom att ta den första bokstaven i varje ord och göra om dem till VERSALER.


*/

function acronym(str) {
    return str.split(" ")
        .map( word => word.charAt(0) )
        .join("")
        .toUpperCase();
}

console.log(acronym("hello world foo bar"));