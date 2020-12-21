class Stock {
  constructor() {
    this.products = [];
  }
  //Skapat klassen stock och lagt in en array som heter products

  add_product(product) {
    this.products.push(product);
    //Metoden add_products pushar in en produkt (parameter) i arrayen products
  }

  inventory() {
    console.log("All products");
    for (let product of this.products) {
      product.print();
      //metoden inventory skriver ut alla produkter i arrayen. Print-metoden finns i Product-klassen
    }
  }

  findProduct(article) {
    let product = this.products.find((p) => p.article === article);
    if (product) {
      console.log("Artikel: " + product.title);
      return product;
    } else {
      console.log("Artikeln finns ej");
    }
  }
}

class Product {
  constructor(title, no_in_stock, article, price, description) {
    this.title = title;
    this.no_in_stock = no_in_stock;
    this.article = article;
    this.price = price;
    this.description = description;
  }

  print() {
    console.log(this.title + " - " + this.no_in_stock + " - " + this.article);
    //Metoden print skriver ut titeln, bindestreck, antalet i lager
  }
}

class Shoppingcart {
  constructor(cart) {
    this.cart = [];
  }
  add_to_cart(product) {
    this.cart.push(product);
    //Metoden add_products pushar in en produkt (parameter) i arrayen products
    console.log(product);
  }
  remove_from_cart(product) {
    let cartArray = this.cart;
    let index = cartArray.indexOf(product);
    let removeProduct = cartArray.splice(index, 1);
    console.log(removeProduct);
    console.log(cartArray);
  }

  print_cart() {
    //let cartArray = this.cart;
    //let cart = cartArray.map((x) => x.title);
    let cartArray = this.cart.map((x) => x.title);
    console.log(cartArray);
    //console.log(this.cart);
  }
  calculate() {
    let prices = this.cart.map((x) => x.price);

    //console.log(prices);
    //Har kvar detta för att se varje items pris
    let sum = prices.reduce(
      (accumulated, currentValue) => accumulated + currentValue,
      0
    );
    console.log(sum);
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
    //console.log(this.history);
    //let inStock = this.cart.map((x) => x.this.products.no_in_stock - 1);
    // let inStock = this.history.map((x) => x.no_in_stock === no_in_stock - 1);
    //for (let stock of this.cart) {
    //}

    for (let i = 0; i < this.cart.cart.length; i++) {
      let product = stock.products.find(
        (p) => p.title === this.cart.cart[i].title
      );
      product.no_in_stock--;
      console.log(product);
    }
  }
}

/* --------------------------------------------------------------------------------- */

let stock = new Stock();
//Skapar ett objekt av Stock-klassen och sparar i variabeln stock

let jacket = new Product("Jacket", 4, 123, 200);
let jacket2 = new Product("Jacket", 10, 987, 500);
let pants = new Product("Pants", 5, 456, 300);
let shoes = new Product("Shoes", 12, 789, 400);
//Skapar 3 nya objekt av Productklassen, sparar i olika variabler och matar in parametrarna title och no_in_stock

stock.add_product(jacket);
stock.add_product(jacket2);
stock.add_product(pants);
stock.add_product(shoes);

//stock.inventory();
//stock.findProduct(123);
//console.log(articleout);

let customer = new Customer();
console.log(customer.cart);

customer.cart.add_to_cart(jacket);
//customer.cart.add_to_cart(jacket2);
//customer.cart.add_to_cart(pants);
customer.cart.add_to_cart(shoes);
customer.cart.add_to_cart(shoes);

//customer.cart.remove_from_cart(jacket);
customer.cart.calculate();
//customer.cart.add_to_cart(jacket);

console.log("-------------------------");
stock.inventory();
customer.buy();
stock.inventory();
