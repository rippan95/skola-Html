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