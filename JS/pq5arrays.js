let marks = [45, 58, 56, 87, 64, 79, 46];

let sum = 0;
for (let value of marks ) {
    sum += value;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg} `);


