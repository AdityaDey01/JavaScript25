/*function myFunction() {          //function defination
    console.log("Welcome to College!");
    console.log("We ate Friends");
}
  myFunction(); */   // function call

  /*function myFunction(msg) {  //if (msg * n )
    //parameter -> input
    console.log(msg); //if (msg * n )
  }
//when if value are used then output will be [NaN(Not a Number)]
  myFunction("I love JS");//argument*/

/*function sum(x, y) {
    //local variable -> scope
    sum = x + y;
    return sum;
}
let value = sum(3,4);
console.log(value);*/

//Arrow function
/*function sum (a,b) {
    return a + b;
}
//Modern function
const arrowSum = (a, b) =>{
    console.log(a, b)
    };*/

   /* const printHello = () => {
        console.log(hello);
    };  */


/*    let arr = ["calcuta" , "pune" , "mumbai" ];
    arr.forEach((val) => {    //forEach
        console.log(val);
    });*/

    /*let num = [2,5,6,3,8];
    let newArr = num.map((val) => {
      return val*2;           //Map function
    });
    console.log(newArr);*/

let arr = [2,5,6,3];
const output = arr.reduce((prev ,curr) => {
  return prev > curr ? prev : curr; 
});               //Reduce function

console.log (output);