// let promise = new Promise((resolve, reject) => {
//     console.log("hello everyone");
//     resolve(123);
// });


// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am happy");
        //resolve("success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((result) => {
    console.log("promise fulfilled", result);
});

promise.catch((error) => {
    console.log("rejected", error);
});