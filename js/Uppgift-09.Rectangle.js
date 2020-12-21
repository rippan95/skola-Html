/* 
Rectangle
Del 1

    Skriv klassen Rectangle med egenskaperna width och height.
    Lägg till parametrarna width och height i konstruktorn med default-värdena 6 och 4.
    Lägg till metoder som returnerar rektangelns omkrets och area.
    Skapa objekt och testa.

Del 2

    Skriv klassen Square som ärver av klassen Rectangle. Fundera över hur många parametrar som kan vara lämpliga i konstruktorn.

*/

class Rectangle {
    constructor(width = 12, height = 8) {
        this.width = width;
        this.height = height;
    }

    circumference() {
        return 4 * (this.width + this.height);
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side = 10) {
        super(side, side)
        this.side = side;
    }
}

let square1 = new Square();

console.log(square1);
console.log(square1.circumference());
console.log(square1.area());