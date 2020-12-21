/* FizzBuzz*/

/* fizzBuzz är ett programmeringsproblem där man skriver ut tal i en talserie. 
Om det aktuella talet är jämt delbart med 3 skriver man ut Fizz, är det jämnt delbart med
5 skriver man Buzz, är det jämt delbart med båda skriver man ut FizzBuzz och annars skriver man ut talet. 
Lös uppgift för talen 0-100.*/
/* steg 1 */ 
for (let i = 0; i <= 100; i++ ) {
     console.log(i);
}

/* steg 2 */ 
for (let i = 0; i <= 100; i++ ) {
    if (i % 3 == 0) {
      console.log ("Fizz");
    } else {
        console.log.apply(i)
    }
}

/* steg 3 */ 
for (let i = 0; i <= 100; i++ ) {
    if (i % 3 == 0) {
      console.log ("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else
       console.log (i);
    }
}
/* steg 4 */ 
for (let i = 0; i <= 100; i++ ) {
    if (i % 3 == 0) {
        console.log ("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log ("FizzBuzz");
    } else
        console.log (i);
    }
}
/* steg 5 */ 
for (let i = 0; i <= 100; i++ ) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log ("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0 ) {
        console.log ("Buzz");
    } else
        console.log (i);
    }
