// Class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

//Creating objects from class
const Person1 = new Person("Ali", 25);
const Person2 = new Person("ZAra", 19);
//Using object methods
Person1.greet();
Person2.greet();

//ProtoType in Js
const employees = {
    calc_tax() {
        console.log("Tax rate is 10%")
    }
}
const karan_kundra = {
    salary : 120000
}
karan_kundra.__proto__ = employees

const samarth_jurel = {
    salary : 80000
}
samarth_jurel.__proto__ = employees

const abhishek_kumar = {
    salary : 75000
}
abhishek_kumar.__proto__ = employees
// ✦ If object and prototype have same method, object method will be used.

// Inheritance in Js
class Parent{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello I'm ${this.name}`);
    }
}

class child extends Parent{
    constructor(name, age){
        super(name);
        this.age = age;
        
    }
    showAge(){
        console.log(`I am ${this.age} years old. `)
    }
}

const child1 = new child("Alex", 34);
child1.greet()
child1.showAge()   // ✦ If child and parent have same method, child method will be used(method overriding)