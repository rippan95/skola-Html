
class Product {
    constructor(sku, title, description, price, numbInStock) {
      this.sku = sku;
      this.title = title;
      this.description = description;    
      this.price = price;
      this.numbInStock = numbInStock;
    }
  
    printList(){
      console.log(`Article Number: ${this.sku} | Product: ${this.title} | Info: ${this.description} | Price: ${this.price} | Stock: ${this.numbInStock} `);
    }
  
  }
  
  class Clothes extends Product{
    constructor(sku, title, description, price, size, numbInStock) {
      this.size = size;
      super(sku, title, description, price, numbInStock)
    }
  
  }
  
  
  class Toys extends Product {
    constructor(sku, title, description, price, numbInStock, ageFrom) {
      this.ageFrom = ageFrom;
      super(sku, title, description, price, numbInStock)
    }  
   
  }
  
  class Stock {
    constructor(){
      this.products = [];
    }

    addProduct(product) {    
        this.products.push(product);
      }
      
      printIventory() {
        let localProducts = this.products.map(product => 'Product: ' + product.title + ', amount in stock: ' + product.numbInStock);
        console.log(localProducts);    
      }
    
      searchProduct(sku){
        const result = this.products.find(product => {
          if (product.sku === sku) {             
            return product;
          }                            
      });  
        console.log(result); 
      }
    
    }

    let stock = new Stock();
    
    let jacket = new Product("Jacket", 4);
    let jacket2 = new Product("bluse", 10);
    let pants = new Product("underclothes", 5);
    let shoes = new Product("Shoes", 12);
    
    

 /*
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
    ['bluse', 29.90],
    ['underclothes', 235.50],
    ['Jacket', 699.90]
    ].map(x => new Item(...x));
    console.log('All items', items);

    // Lägg till dem i varukorgen
    // (2 skor, 3 hoodie, 2 jeans)
    basket.add(items[0], 4);
    basket.add(items[1], 10);
    basket.add(items[1], 5);
    basket.add(items[2], 12);

    // Titta på varukorgens innehåll
    console.log('Korgens innehåll',
    JSON.stringify(basket.contents, '', ' '));

    // Ta bort en vara
    basket.remove(items[1]);
    console.log('Korgens innehåll (inga Jeans)',
    JSON.stringify(basket.contents, '', ' '));

     */ 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log("Person: " + this.name)
    }
}


class Customer {
  constructor(name) {
    this.cart = new Shoppingcart();
    this.name = name;
    this.history = [];
  }

  buy() {
    this.history.push(this.cart);
    let d = new Date();
    this.history.push(d);
    

    for (let i = 0; i < this.cart.cart.length; i++) {
      let product = stock.products.find(
        (p) => p.title === this.cart.cart[i].title
      );
      product.no_in_stock--;
      console.log(product);
    }
  }
}  