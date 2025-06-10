/* function countVowels (str) {
    let count = 0;
    for (const char of str){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }
    console.log(count);
}*/

/*const countVow = (str) => {
       let count = 0;
    for (const char of str){
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }
    console.log(count);
}


//forEach function
let num = [2,5,6,3,8];
num.forEach((num) => {
    console.log(num * num);   //num*2 
});*/

/*let marks = [97,46,52,79,82];

let toppers = marks.filter((val) => {
    return val > 90;
});    //find max number = 97

console.log(toppers);*/

let n = prompt ("enter a number : 10 ");

let arr = [];

for(let i =1; i<=n; i++ ) {
    arr[i-1] = i;
}
console.log (arr);

let sum = arr.reduce  ((res, curr) => {
    return res + curr;
});
console.log(sum);