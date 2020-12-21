/* 

Dice part 2

Utgå från den tidigare uppgiften med tärningar.

    Slå tärningarna 10 gånger och skriv ut medelvärdet av tärningarnas värde efter varje slag.
    Skriv ut medelvärdet av de tio kasten.
    Lägg till egenskapen this.dice_values som ska innehålla en array med sex stycken värden.
    Skriv en metod som räknar ut hur många av varje tärningsvärde dina tärningar innehåller, dvs hur många ettor, hur många tvåor osv. Spara resultatet i arrayen dice_values.
    Skriv en metod som kontrollerar om tärningsuppsättningen innehåller en liten stege, dvs en etta, en två, en trea, en fyra och en femma.


*/

class Die {
    constructor() {
        this.value = null;
        this.throw();
    }

    throw() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}

class Dice {
    constructor(no_of_dice = 5) {
        this.dice_objects = [];
        this.dice_values = Array(7);

        for ( let dice_counter = 0; dice_counter < no_of_dice; dice_counter++ ) {
            this.dice_objects.push(new Die());
        }

        this.throw();
    }

    small_straight() {
        return this.dice_values[1] == 1 &&
            this.dice_values[2] == 1 &&
            this.dice_values[3] == 1 &&
            this.dice_values[4] == 1 &&
            this.dice_values[5] == 1
    }

    values() {
        this.dice_values.fill(0);
        for ( let current_dice of this.dice_objects ) {
            this.dice_values[current_dice.value]++;
        }
    }

    throw() {
        for ( let current_dice of this.dice_objects ) {
            current_dice.throw();
        }
        this.values();
    }
}

let dice1 = new Dice();

console.log(dice1);
console.log(dice1.small_straight());

/*
let sum = 0;
let throws = 10;
for (let i = 1; i <= throws; i++) {
    dice1.throw();
    let sum_current = dice1.dice_objects.reduce((acc, current) => acc + current.value, 0)
    let avg = sum_current / dice1.dice_objects.length;
    sum += avg;
    console.log("Medelvärde: " + avg);
}
let avg = sum / throws;
console.log("Medelvärde alla: " + avg);
*/