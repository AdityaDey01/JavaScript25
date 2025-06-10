// const student = {   //direct way to create objects 
//     fullName : "aditya dey",
//     marks: 85,
//     printMarks: function() {
//         console.log("marks =", this.marks); //here this defines the student
//     },
// };

const  employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const Roni = {
    salary: 50000,
};

Roni._proto_ = employee