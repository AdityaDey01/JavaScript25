// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {
    
// }

class Person {
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Actor extends Person {
    perform() {
        console.log("act in stage");
    }
}

let adityaObj = new Actor();