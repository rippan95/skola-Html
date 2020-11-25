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