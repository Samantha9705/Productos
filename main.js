const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";

function getData(){
    fetch(URLmain)
    .then((response)=>{
        console.log(response);
        
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend", `${err.message}`)

    });
}

getData();

