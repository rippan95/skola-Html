/* Prime */

/* Ett primatal är bara jämt delbart med sig själv. Skriv en funktion som
 tar en parameter och kontrollerar om talet är ett primtal eller inte*/


 // 2, 3 ,5 ,7, 11, 13, 17, 19, 23, 39, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,73, 79, 83, 89, 97

 function prime (number) {
     if (number < 2 ) {
         return false
     }
     for (let i = 2; i < number; i++) {
         if (number % i === 0) {
             return false;
         }
     }
     return true;
 }

 for (let i = 1; i <= 100; i++ ) {
     if (prime( i ) ){
         console.log ( i );
     }
 }