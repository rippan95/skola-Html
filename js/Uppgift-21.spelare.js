/* 

Player

    Skapa klassen Player som ska hålla reda på en spelares namn och poäng.
    Skapa metoderna add_points() och deduct_points() som lägger till respektive tar bort poäng från spelaren.
    Skapa en statisk metod som tar emot en array av spelare och skriver ut en lista över spelarna i poängordning, en high score-lista.
    Skapa ett par spelare med olika poäng.
    Lägg till och ta bort poäng och skriv ut highscore-listan mellan varje för att se att den fungerar.


*/

class Player {
    constructor(name, points = 0) {
        this.name = name;
        this.points = points;
    }

    add_points(points = 5) {
        this.points += points;
    }

    deduct_points(points = 5) {
        if (this.points > points) {
            this.points -= points;
        } else {
            this.points = 0;
        }
    }

    static highscore(players) {
        players.sort((player_a, player_b) => player_b.points - player_a.points);

        for (let player of players ) {
            console.log(player.name + ' - ' + player.points);
        }
    }
}

let player_list = [];

player_list.push(new Player("Micke", 50));
player_list.push(new Player("Lisa", 60));
player_list.push(new Player("Ali", 35));

Player.highscore(player_list);

player_list[2].add_points(20);
Player.highscore(player_list);

player_list[2].add_points(20);
Player.highscore(player_list);

player_list[0].deduct_points(20);
Player.highscore(player_list);