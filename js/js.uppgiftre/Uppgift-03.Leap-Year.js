/* Leap Year */

/* Skriv en funktion som tar ett år (nuber)  som parameter och returnera true om 
året är ett skottår, annars false.
Skriv en annan funktion som tar två parametatra, start_year och end_year. och som skriver ut 
varje år i intervallet och året är ett skottår eller inte*/

function Leap_year (year) {
    let divided_four   = (year % 4 ) === 0;
    let divided_hundred = (year % 100 ) === 0;

    //console.log (divided_four && ! divided_hundred );

    if (divided_four && ! divided_hundred ) {
        return true;
       } else {
        return false;
    }
}

let result = leap_year ( 2000 );

console.log ( result );

// sista delen 

function Leap_year (year) {
    let divided_four   = (year % 4 ) === 0;
    let divided_hundred = (year % 100 ) === 0;

    return ( divided_four && ! divided_hundred );
}

function check_year (start_year, end_year) {
    for (let year = start_year; year <= end_year; year++ ) {
         let leap = leap_year ( year ) ? "skottår" : " ej skottår ";

       console.log ( year + ": " + leap );
    }
}

check_year (2015, 2025 );