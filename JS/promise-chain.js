//promise chain

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 5000);
    });
}

getData(1)
.then((result) => {
    return getData(2);
})
.then((result) => {
    console.log(result);
    });   //more easier than callBackHell