// Problem 1
let Data = "secret information"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data:", Data)
    }
}

let student1 = new User("Amna", "amnaraziq321@email.com");
let student2 = new User("Muhammad siddique", "siddiquemusafir321@email.com");

// Problem 2
let DATA = "secret info";
class user {
    constructor(name, email) {
        this.name = name
        this.email = email;
    }
    viewData() {
        console.log("data:", DATA)
    }
}
class admin extends user {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        DATA = "some new value"
    }
}



let Student1 = new user("Amna", "amnaraziq321@email.com");
let Student2 = new user("Muhammad siddique", "siddiquemusafir321@email.com");

let admin1 = new admin("Admin", "Deadmin.com");