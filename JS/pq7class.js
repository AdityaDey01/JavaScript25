let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("website data")
    }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
        editData() {
            DATA = "some new value" 
        }
    }

let student1 = new User("aditya", "adityadey@email.com");
let student2 = new User("marian", "marian578@email.com");

let admin1 = new Admin ("admin", "admin@college.com");
