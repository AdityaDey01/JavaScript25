/*for(let num=0;  num<=100; num++) {
    console.log("num =", num); 
    if(num % 2 !== 0){
        console.log("num =", num);
    }
}*/

let gameNum = 25;

let userNum = prompt("Guess the game number :");


while (userNum != gameNum) {  //game
    userNum = prompt("You entered wrong number . Guess again :");
    
}

console.log("Congratulations, you entered the right number");
