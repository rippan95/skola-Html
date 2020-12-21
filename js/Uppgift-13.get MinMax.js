/* 
Get MinMax

    Gör en funktion: get_min_max(). Funktionen ska ta en rest-parameter och ta emot minst 2 tal och som mest 7 tal som in-parametrar.
    Din funktion ska kontrollera antalet tal och returnera false om parametrarna är felaktiga.
    Funktionen ska räkna ut det högsta respektive det lägsta talet av de fyra du skickade in och ge ut de två svaren till den som anropar metoden genom att returnera ett objekt med egenskaperna min och max.
    Skriv kod som anropar get_min_max och skriver ut min respektive max. Ingen utskrift ska ske i funktionen, funktionen ska returnera ett objekt.

Exempel på värden och deras svar:
 
1, 2, 3, 4 ger min=1 och max=4
1, 1, 1, 1 ger min=1 och max=1
2, 1, -1, -2, ger min=-1 och max=2
 
Tips: Kolla in Math.min() och Math.max().
*/

function get_min_max(...numbers) {
    if (numbers.length < 2 || numbers.length > 7) {
        return false;
    }

    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

let result = get_min_max(2, 1, -1, -2);
console.log('Min: ' + result.min);
console.log('Max: ' + result.max);