/* 

Pythagoras

Denna uppgift kräver lite efterforskningar om hur trianglar, Pythagoras sats och kanske fler saker fungerar.

    Skapa klassen Triangel med lämpliga egenskaper.
    Summan av vinklarna i en triangel är 180 grader. Skriv metoden right_angled() som tittar på två av vinklarna i triangeln och räknar ut om triangeln är rätvinklig.
    Skapa metoden hypotenuse() som räknar ut hypotenusan utifrån bredden och höjden 


*/
class Triangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.angles = [];
    }

    hypotenuse() {
        return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
    }

    right_angled() {
        let sum = this.angles.reduce( (acc, current) => acc + current, 0 );
        return 90 === sum;
    }
}

let triangle1 = new Triangle(10, 15);
triangle1.angles.push(30)
triangle1.angles.push(50)

console.log(triangle1.hypotenuse());