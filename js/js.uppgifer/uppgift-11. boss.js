/* 
Boss

Denna uppgift är ganska lik Dice och Books men är mer uppdelad. Fokusera på en del i taget. Vissa delar är svårare än andra och det är inte hela världen om du inte löser alla delar.
Del 1

    Skriv klassen Person med egenskaper / konstruktorparametrarna name och age.
    Skriv klassen Employee som ärver från Person och lägger till egenskapen salery.
    Skriv klassen Boss som ärver från klassen Employee och lägger till egenskapen level.

Del 2

    Lägg till metoden print() i klassen Person som skriver ut personens namn och ålder.
    Skapa en employee och en boss och anropa print()-metoden för båda.

Del 3

    Lägg till klassen Company med egenskaperna name och employees. Employees ska innehålla en array med ett par påhittade namn som strängar, t ex ["Kalle", "Lisa", "Ali"]. Observera att denna klass inte har något med de andra klasserna att göra, inget arv eller så.
    Skriv metoden list_employees() som skriver ut alla anställda var för sig.
    Skapa variabeln company1 av klassen Company. Skriv ut variabeln och se vad den innehåller.
    Anropa metoden list_employees() och kontrollera utskriften.

Del 4

    Skriv metoden add_employee(name) som lägger till namnet i arrayen som innehåller anställda.
    Anropa metoden genom variabeln company1.
    Anropa metoden list_employees() och kontrollera utskriften.

Del 5

    Ändra metoden add_employee() så att den istället för att lägga till en sträng skapar ett nytt objekt av klassen Employee och lägger till detta objekt i arrayen.
        Tänk på att ändra parametrarna till add_employee().
    Ändra metoden list_employees() så att den fortfarande skriver ut namnet på alla anställda.

Del 6

I JavaScript kan man använda operatorn instanceof för att ta reda på om objekten är en instans av en viss klass.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

    Lägg till ett par anställda som är chefer.
    Ändra metoden list_employees() så att även rollen skrivs ut, dvs "Nisse - Anställd" och "Jessica - Chef" eller liknande.

Del 7

    Lägg till metoden saleries_sum() i Company-klassen. Metoden ska med hjälp av reduce() räkna ihop summan av alla anställdas löner.

Del 8

    Ändra list_employees() så att den tar emot parametern list. Parametern förväntas innehålla en likadan array som this.employees, dvs en array med Employees-objekt.
    Ändra list_employees() så att den skriver ut parametern list istället för this.employees.
    Sätt default-värdet för parametern list till this.employees, så att om man inte anger någon parameter är det fortfarande this.employees som kommer att skrivas ut.

Del 9

    Skapa metoden list_bosses(). Metoden ska genom en filter()-funktion ta fram en array på de anställda som är chefer och skriva ut dessa.
    Skriv inte ut cheferna i list_bosses() utan skicka arrayen som parameter till list_employees().

Del 10

    Ändra saleries_sum() så att den tar emot parametern list. Parametern förväntas innehålla en likadan array som this.employees, dvs en array med Employees-objekt.
    Ändra saleries_sum() så att den använder parametern list istället för this.employees.
    Sätt default-värdet för parametern list till this.employees, så att om man inte anger någon parameter är det fortfarande this.employees som kommer att skrivas ut.

*/


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(this.name + ': ' + this.age)
    }
}

class Employee extends Person {
    constructor(name, age, salery) {
        super(name, age);
        this.salery = salery;
    }
}
class Boss extends Employee {
    constructor(name, age, salery, level) {
        super(name, age, salery);
        this.level = level;
    }
}

class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    list_employees(list = this.employees) {
        for(let employee of list) {
            let role = ( employee instanceof Boss ) ? "Chef" : "Anställd";
            console.log(employee.name + ' - ' + role);
        }
    }

    list_bosses() {
        let bosses = this.employees.filter(employee => employee instanceof Boss);
        this.list_employees(bosses);
    }

    add_employee(name, age, salery) {
        let employee = new Employee(name, age, salery);
        this.employees.push(employee);
    }

    add_boss(name, age, salery, level) {
        let boss = new Boss(name, age, salery, level);
        this.employees.push(boss);
    }

    saleries_sum(list = this.employees) {
        return list.reduce((acc, current_value) => acc + current_value.salery, 0);
    }

    saleries_sum_bosses() {
        let bosses = this.employees.filter(employee => employee instanceof Boss);
        let saleries = this.saleries_sum(bosses);
        return saleries;
    }
}

let company1 = new Company("Ikea");
company1.add_employee("Cecilia", 33, 25000);
company1.add_employee("Kalle", 35, 28000);
company1.add_employee("Mohammad", 22, 22000);
company1.add_boss("Nisse", 33, 30000, 3);
company1.add_boss("Jessica", 28, 33000, 4);
//company1.list_employees();
console.log(company1.saleries_sum_bosses());
//company1.list_bosses();