class Student {​​

constructor(name = "", age = 0) {​​

this.name = name;

this.age = age;

this.subjects = [];

}​​



greeting() {​​

console.log("Hello " + this.name);

}​​



add_subject(title = "", points = 0) {​​

this.subjects.push(new Subject(title, points));

}​​



get courses() {​​

let courses = this.subjects;

let courses2 = courses.map(current_subject => current_subject.title);

let courses3 = courses2.join

return courses2;

}​​

}​​



class Subject {​​

constructor(title = "", points = 0) {​​

this.title = title;

this.points = points;

}​​

}​​



let student1 = new Student("Emma", 25);

student1.add_subject("JavaScript", 55);

student1.add_subject("PHP", 40);



console.log(student1.courses);