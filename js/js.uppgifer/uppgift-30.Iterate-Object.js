/*
Skriv en funktion som tar emot ett objekt och skriver ut dess egenskaper. Objektet kan vara vilket som helst, men här är ett exempel:
let student = {
  name : "Jessica",
  age : 44,
  grade : "VG"
};
Utskrift: name,age,grade
Ni kan ha nytta av denna dokumentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

let student = {
    name: "Jessica",
    age: 44,
    grade: "VG"
  };
  
  for (let property of Object.keys(student)) {
    console.log(`${property}: ${student[property]}`);
  }
  
  // console.log(Object.keys(student).join(", "));