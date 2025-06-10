function asyncFunction1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunction2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1....");
    asyncFunction1().then((result) => {
    console.log(result);
console.log("fetching data2....");
    asyncFunction2().then((result) => {
    console.log(result);
    });
});