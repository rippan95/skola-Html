/* 
Circles
Del 1

    Skapa en klass för cirklar med lämpliga egenskaper.
    Skapa en metod som returnerar omkrets. (Kolla upp om det finns någon konstant för PI i JavaScript.)
    Skapa en metod som returnerar area.
    Skapa en array som innehåller ett par olika cirklar.
    Skapa statiska sorteringsmetoder som sorterar cirklarna efter storleksordning.

Del 2

    Vi har en cirkel med radien x och en kvadrat som precis innesluter cirkeln.
   Skapa metoden circle_in_square_area som räknar ut den blå arean, arean i kvadraten som inte upptas av cirkeln. 
*/

class Circle {
    constructor(radius = 0) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }

    circle_in_square_area() {
        return (4 * Math.pow(this.radius, 2)) - this.area();
    }

    static sort_by_size(circle_a, circle_b) {
        return circle_a.radius - circle_b.radius;
    }
}

let circles = [
    new Circle(23),
    new Circle(10),
    new Circle(17)
];

console.log(circles[1].circle_in_square_area());
/*
circles.sort(Circle.sort_by_size);
console.log(circles);
*/