/*Different signs*/
/* Skriv en funktion som tar två parametrar och returnerar sant om den ena är positiv och den andra är negativ. */

function different_signs(x, y) {
    if (x < 0  && y >= 0) {
        return true;
    }
    if (y < 0  && y >= 0) {
        return true;
    }

    return false;
}

console.log (different_signs(-4,3));
