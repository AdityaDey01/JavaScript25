/*let name = "Tony";
age = "20";
X = null;
Y = undefined;

console.log(name);

const PI = 3.14;
console.log(PI);

let a;
a = 10;  //in Let may or may not be input values 
console.log(a);*/

//but in of Const we always need to insert the value of the variable

//let age = 24;

const student = {
    fullName : "Tony",
    age : 20,
};

student["age"] = student["age"] + 1;

console.log(student.age);