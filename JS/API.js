const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#button");


// const getFacts = async() => {
//     console.log("getting data....");
//     let response = await fetch(URL);  //get request  
//     console.log(response);  //JSON format
//     let data = await response.json();
//     // console.log(data[0].text);
//     factPara.innerText = data[0].text;
// };

function getFacts() {
    fetch(URL).then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[2].text;
    });
}

button.addEventListener("click", getFacts);