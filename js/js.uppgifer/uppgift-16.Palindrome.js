/* 

Palindrome

En palindrom är en följd av skrivtecken som, med blanksteg och skiljetecken exkluderade, förblir oförändrad om man läser den baklänges. [...] Några exempel är "Naturrutan", "kajak", "tillit".

Wikipedia

Skapa en funktion som kontrollerar om en sträng är ett palindrom eller inte. Prova den med några strängar.

    Ni talar bra latin // true
    Lorem ipsum // false


*/

function palindrome(str) {
    let str_reverse = str.split("").reverse().join("");

    str = str.replaceAll(' ', '').toLowerCase();
    str_reverse = str_reverse.replaceAll(' ', '').toLowerCase();

    return ( str === str_reverse );
}

console.log(palindrome("sirap i Paris"));