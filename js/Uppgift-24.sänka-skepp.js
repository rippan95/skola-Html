/* 
Sink Ship

I Sänka skepp har båda spelarna en spelplan där hen placerar ut sina skepp.
Del 1

    Skapa en spelplan som ett rutnät. Ett sätt att göra på är att använda en multidimensionell array.
    Skriv en metod som skriver ut spelplanen ungefär såhär:

       A  B  C  D  E  F  G  H  I  J
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10

Del 2

    Skriv en metod som låter användaren lägga till ett skepp. Det enda du behöver göra just nu är att sätta ett kryss i den punkten du anger. Om du t ex anropar metoden med koordinaterna / strängen "B2" och sedan skriver ut spelplanen så ska den se ut såhär:

   A B C D E F G H I J
1
2    X
3
4
5
6
7
8
9
10

Del 3

    Skapa en metod som heter shoot(). Låt den ta emot en koordinat och returnera true om skottet träffar ett skepp, annars false. Marlera skotten med ett O. T ex shoot("E4") returnerar false och en utskrift ser ut såhär:

   A B C D E F G H I J
1
2  X
3
4          O
5
6
7
8
9
10
*/

class SinkShip {
    constructor() {
       this.columns = 'ABCDEFGHIJ';
       this.board = new Array(10).fill(0);
       this.board = this.board.map(() => new Array(10).fill(" "));
 
       this.symbols = {};
       this.symbols.hit = 'T';
       this.symbols.miss = 'o';
       this.symbols.ship = 'x';
 
    }
 
    print_game_plan() {
       console.log('     A B C D E F G H I J');
       console.log('   +--------------------');
    
       for (let i = 0; i < this.board.length; i++) {
          let row = this.board[i];
          let row_no = i + 1 < 10 ? ' ' + (i + 1) : i + 1;
       
          console.log(row_no + ' | ' + row.join(" "));
       }
    }
 
    get_coords(coords) {
       let x = coords[0];
       let y = coords[1] - 1;
 
       x = this.columns.indexOf(x);
 
       return {x, y}
    }
 
    add_ship(coords) {
       let x, y;
       ({x, y} = this.get_coords(coords));
 
       game.board[y][x] = this.symbols.ship;
    }
 
    shoot(coords) {
       let x, y;
       ({x, y} = this.get_coords(coords));
 
       let hit = this.symbols.ship === game.board[y][x];
 
       if (hit) {
          game.board[y][x] = this.symbols.hit;
       } else {
          game.board[y][x] = this.symbols.miss;
       }
 
       this.print_game_plan();
 
       return hit;
    }
 }
 
 
 let game = new SinkShip();
 
 game.add_ship('D3');
 game.add_ship('E2');
 
 game.print_game_plan();
 
 game.shoot('E2'); // hit
 game.shoot('E3'); // miss
 