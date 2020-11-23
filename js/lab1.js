// Labb 1 - e-handel


//Produkter ska ha egenskaper som sku (artikelnr), titel, beskrivning, antal i lager, pris. Den ska ha en metod som skriver ut produkten. 

/* class Product {
    constructor( sku, title, beskrivnig, antal, pris) {
        this.sku = sku;
        this.title = title;
        this.beskrivnig = beskrivnig;
        this.antal = antal;
        this.pris = pris;
    }

    printProduct(){
        console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.beskrivnig} | In-Stock: ${this.antal} | Price: ${this.pris}`);
    }

}*/

//•Kläder ska ha en klass som ärver från produkter och lägger till egenskapen storlek. 

/* */

//•Leksaker ska ha en klass som ärver från produkter och lägger till egenskapen ”ålder från”. 

/* */

//•Det ska finnas en lager-klass som håller reda på alla produkter i butiken och hur många som finns i lager av varje produkt. 

/* */

//•Det ska finnas en inventarie-metod som skriver ut en lista med alla produkter och hur många det finns av produkten.

/* */

//•Det ska finnas en metod som returnerar ett objekt baserat på sku. Om det t ex finns en produkt ”jacka” med sku ”456” så ska man kunna söka efter produkten genom att skicka artikelnumret till metoden och få tillbaka objektet. •Det ska finnas en varukorg som innehåller 0-n produkter. Varukorgen ska höra ihop med en kund.

/* */

// •Varukorgen ska ha en metod för att skriva ut innehållet i korgen.

/* let items = [
    ['Tröja', 29.90],
    ['Hoddie', 235.50],
    ['Jeans', 699.90]
    ].map(x => new Item(...x));
    console.log('All items', items);*/

//•Varukorgen ska ha en metod för att räkna ihop summan av värdet av alla produkter i korgen. 

/*  console.log('Korgens innehåll',
    JSON.stringify(basket.contents, '', ' ')); */

//•Varukorgen ska ha metoder för att lägga till och ta bort produkter i varukorgen. 

/*basket.remove(items[1]);
console.log('Korgens innehåll (inga Jeans)',
JSON.stringify(basket.contents, '', ' '));*/


//•Det ska finnas en kund-klass som håller reda på namn, orderhistorik och nuvarande varukorg.

/* */


//•Det ska finnas en köp-metod som lägger till varukorgens innehåll i kundens köphistorik med datum och minskar lagervärdet på produkte

/* */

class Product {
    constructor( sku, title, beskrivnig, antal, pris) {
        this.sku = sku;
        this.title = title;
        this.beskrivnig = beskrivnig;
        this.antal = antal;
        this.pris = pris;
    }

    printProduct(){
        console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.beskrivnig} | In-Stock: ${this.antal} | Price: ${this.pris}`);
    }

}
class Clothes extends Products {
    constructor(sku, title, beskrivnig, antal, pris, storlek) {
      this.storlek = storlek;
      super(sku, title, beskrivnig, antal, pris)
    }  
   
  } 

  /*
class Clothes {
    constructor(sku, title, beskrivnig , antal , pris, storlek) {
        this.sku = sku;
        this.title = title;
        this.beskrivnig = beskrivnig;
        this.antal = antal;
        this.pris = pris;
        this.storlek = storlek;
    }

}
*/
class Toys extends Products {
    constructor(sku, title, beskrinvnig, antal, pris, ageFrom) {
      this.ageFrom = ageFrom;
      super(sku, title, beskrinvnig, antal, pris)
    }  
   
  }

/*class Toys {
    constructor(sku, title, beskrivnig, antal, pris, ålder) {
        this.sku = sku;
        this.title = title;
        this.beskrivnig = beskrivnig;
        this.antal = antal;
        this.pris = pris;
        this.ålder = ålder;
    }
}
*/

let object1 = new Product(123456, "Skor", "jeans skor", 25);
let object2 = new Product(789101, "Hoodie", "Slätt Söt Sweatshirt ", 43);
let object3 = new Product(112131, "Blus", " Broderi Blommig Elegant Blus ", 63);
let object4 = new Product(141516, "Jeans", "Svarta jeans", 36);


object1.printProduct();
 
/*
class stock {
    constructor () {
        this.Produkt = ();

    }
    add_produkt( produkt) {
        this.produkt.push(prudukter);

    }
    ineventory () {
        console.log ("all produkter");
        for (let produkt of this. produkt){
            console.log (prudukter.titel + " - " + produkt ){
            product.print();
        }
    }
 
let stock = new stock();

*/




class Basket {

      constructor() {
        this.inBasket = [];
      }

      checkItem(item) {
       
        if (!(item instanceof Item)) {
          throw (new Error('You can only add items to the basket!'));
        }
      }

      add(item, quantity) {
        this.checkItem(item);
        // Hitta raden varan finns på i korgen
        let row = this.inBasket.find(row => row.item === item);
        // Om varan inte finns sedan tidigare lägg till en ny rad i korgen
        row = row || { item, quantity: 0 };
        row.quantity === 0 && this.inBasket.push(row);
        // Lägg till kvantiteten
        row.quantity += quantity;
       // Ta bort varan om den nya kvantiteten är 0
       row.quantity || this.removeFromBasket(item);
      }

      remove(item) {
        this.checkItem(item);
        // Leta efter varan i korgen
        let row = this.inBasket.find(row => row.item === item);
        let index = this.inBasket.indexOf(row);
        // Om den finns ta bort den
        index >= 0 && this.inBasket.splice(index, 1);
      }

      // Beräkna radsummor och summor
      get contents() {
        // radsummor
        let data = {
          rows: this.inBasket.map(
            row => ({ ...row, sum: row.item.pris * row.quantity })
          )
      }
      // totalsumma
      data.total = data.rows.reduce((total, { sum }) => total + sum, 0);
      return data;
      }

    }


    class Item {
      constructor(Titel, pris) {
        this.Titel = Titel;
        this.pris = pris;
      }
    }


    // Test

    // Skapa en varukorg
    let basket = new Basket();

    // Skapa några varor
    let items = [
    ['Skor', 29.90],
    ['Hoodie', 235.50],
    ['Jeans', 699.90]
    ].map(x => new Item(...x));
    console.log('All items', items);

    // Lägg till dem i varukorgen
    // (2 skor, 3 hoodie, 2 jeans)
    basket.add(items[0], 5);
    basket.add(items[1], 1);
    basket.add(items[1], 2);
    basket.add(items[2], 2);

    // Titta på varukorgens innehåll
    console.log('Korgens innehåll',
    JSON.stringify(basket.contents, '', ' '));

    // Ta bort en vara
    basket.remove(items[1]);
    console.log('Korgens innehåll (inga Jeans)',
    JSON.stringify(basket.contents, '', ' '));

    
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("Person: " + this.name)
    }
}


class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;

class Clothes extends Product {
    constructor(sku, title, beskrinvnig, antal, pris, storlek) {
        super(sku, title, beskrinvnig, antal, pris)
        this.storlek = storlek;
    }
}

class Clothes extends Product {
    constructor(sku, title, beskrinvnig, antal, pris, storlek) {
        super(sku, title, beskrinvnig, antal, pris)
        this.storlek = storlek;
    }
}
    class Toys extends Product {
        constructor(sku, title, beskrinvnig, antal, pris, ålder) {
            super(sku, title, beskrinvnig, antal, pris);
            this.ålder = ålder;
        }
    }
    class Stock {
        inventory () {
            
        }
    }

    class Stock {
        print_inventory () {
            console.log(Clothes);
        }
    }
    
    let stock1 = new Stock();
    stock1.print_inventory(); 
 
         }
     }    