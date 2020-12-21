/* 
Vehicle
Del 1

    Skapa klassen Vehicle med egenskaperna model, make, color, speed, no_of_wheels samt max_speed.
    Skapa klasserna Truck, Motorcycle och Car som ärver från Vehicle. Konstruktorerna ska kalla på föräldrakonstruktorerna.
    Truck ska ha max-hastigheten 50, Motorcycle ska ha max-hastigheten 200 och Car ska ha 180. Dessa värden ska inte kunna ändras i konstruktorn.
    De andra egenskaperna ska kunna sättas i konstruktorn.
    Egenskapen no_of_wheels ska ha olika default-värden för olika klasser (MC: 2, bil: 4, lastbil: 6) men man ska kunna ange no_of_wheels i konstruktorn om man vill.

Del 2

    Klassen Vehicle ska ha metoderna speed_up() och speed_down(). Metoderna ska ta en parameter som säger hur mycket hastigheten ska ändras. Om hastigheten är 100 och du anropar speed_up(5) så ska den nya hastigheten bli 105.
    Du ska kontrollera så att hastigheten inte överstiger max_speed eller understiger 0. Om hastigheten exempelvis är 10 och du anropar speed_down(15) så ska hastigheten bli 0.
    Vehicle ska ha metoden print() som skriver ut ett fordon.

Lägg till minst två fordon av vardera Truck, Motorcycle och Car och skriv ut dem. Visa att dina metoder speed_up och speed_down fungerar.
*/

class Vehicle {
    constructor(model, make, color, speed, no_of_wheels, max_speed) {
        this.model = model;
        this.make = make;
        this.color = color;
        this.speed = speed;
        this.no_of_wheels;
        this.max_speed = max_speed;
    }

    speed_up(speed_change) {
        if ( (this.speed + speed_change) <= this.max_speed) {
            this.speed += speed_change;
        } else {
            this.speed = this.max_speed;
        }
    }

    speed_down(speed_change) {
        if ( (this.speed - speed_change) >= 0) {
            this.speed -= speed_change;
        } else {
            this.speed = 0;
        }
    }

    print() {
        console.log(this.make + ' ' + this.model + ' (' + this.color + ')');
    }
}

class Truck extends Vehicle {
    constructor(model, make, color, speed = 0, no_of_wheels = 6) {
        super(model, make, color, speed, no_of_wheels, 50);
    }
}

class Motorcycle extends Vehicle {
    constructor(model, make, color, speed = 0, no_of_wheels = 2) {
        super(model, make, color, speed, no_of_wheels, 200);
    }
}

class Car extends Vehicle {
    constructor(model, make, color, speed = 0, no_of_wheels = 4) {
        super(model, make, color, speed, no_of_wheels, 180);
    }
}

let vehicle1 = new Car("V70", "Volvo", "red");
let vehicle2 = new Truck("BM", "Scania", "yellow");
let vehicle3 = new Motorcycle("Trophy", "Triumph", "blue");

vehicle1.print();
vehicle2.print();
vehicle3.print();