/*Odd sum:*/

/*Skriv en funktion som tar emot ett okänt antal tal i en rest-parameter och räknar ihop summan av alla udda tal och returnerar det. 
 
Använd en filter-funktion och en reduce-funktion. */

function odd_sum(...numbers) {
    return numbers
        .filter( current_number => current_number % 2 !== 0)
        .reduce( (accumulated, value) => accumulated + value, 0 );
}

console.log(odd_sum(1, 2, 3, 4, 5, 6, 7));