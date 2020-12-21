 /* Dice

    Skriv klassen Die med egenskapen value.
    Lägg till metoden throw() som ger tärningen ett nytt värde från 1 till 6.
    Anropa metoden throw() i  konstruktorn.
    Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdet ändras.
    Skriv klassen Dice med egenskapen dice, som ska innehålla en array.
    Låt konstruktorn ta emot en parameter som säger hur många tärningar vi vill skapa med default-värdet 5 och lägg till så många objekt av klassen Die i egenskapen dice.
    Lägg till metoden throw() som slår alla tärningarna med hjälp av metoden throw() i Die-klassen.
    Skapa ett objekt av klassen, anropa throw() några gånger och skriv ut objektet efter varje gång så du ser att värdena ändras.

 */ 

class Die {
   constructor() {
       this.value = null;
       this.throw();
   }

   throw() {
       this.value = Math.floor(Math.random() * 18) + 2;
   }
}

class Dice {
   constructor(no_of_dice = 10) {
       this.dice_objects = [];

       for ( let dice_counter = 0; dice_counter < no_of_dice; dice_counter++ ) {
           this.dice_objects.push(new Die());
       }
   }

   throw() {
       for ( let current_dice of this.dice_objects ) {
           current_dice.throw();
       }
   }
}

let dice_example = new Dice();
console.log(dice_example);

dice_example.throw();
console.log(dice_example);