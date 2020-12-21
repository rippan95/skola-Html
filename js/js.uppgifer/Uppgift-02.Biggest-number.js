/* Biggest number */

/* Skriv en funktion som jämför två tal och retunerar det största*/

/* steg 1 */ 
function Biggest_number (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
let result = Biggest_number (2 ,4);

console.log(result)


/*exempel 2 */
function Lowest_number (x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}
let result = Lowest_number (-6 ,4);

console.log(result)