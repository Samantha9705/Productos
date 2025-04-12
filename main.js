const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";
const ulMenu = document.getElementById("ulMenu");
const Productos = document.getElementById("Productos");

async function getData(cat = ""){
    const options = {"method" : "GET"};
    await fetch(URLmain+cat, options)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            createCards(res);
        });
        
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend", `${err.message}`)

    });
}//getData

function createCards(products){
   // Productos.innerHTML("");

    products.forEach(producto=>{
        Productos.insertAdjacentHTML("beforeend", 
                   `<div class="card" style="width: 18rem;">
                         <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                         <div class="card-body">
                           <h5 class="card-title">${producto.title}</h5>
                           <p class="card-text">${producto.description}</p>
                           
                         </div>
                     </div>`);
    });
    //for(let i = 0; i < products.length; i++){
    //    console.log(products[i]);
    //}
}

//createCards(URLmain);

async function fetchingData(){
    try{
        const res = await getData();
        main.insertAdjacentHTML("beforeend",
                `<div class="card" style="width: 18rem;">
                      <img src="${res.image}" class="card-img-top" alt="${res.title}">
                      <div class="card-body">
                        <h5 class="card-title">${res.title}</h5>
                        <p class="card-text">${res.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`);
        }catch(err){
            main.insertAdjacentHTML("beforeend", 
                `<div class="alert alert-danger" role="alert">
                    ${err.message}
                </div>`)
    }
};

///////////////////
 function getCategories(){
     const options = {'method' : "GET"};
     fetch (URLmain+"categories/", options)
     .then((response)=>{
         response.json().then((res)=>{
             res.forEach((cat)=>{
                 ulMenu.insertAdjacentHTML("afterbegin", `<li><a class="dropdown-item" onclick="getData('category/${cat}');">${cat}</a></li>`);
             });          
         });
     }).catch((err)=>{
         main.insertAdjacentHTML("beforeend",
             `<div class="alert alert-danger" role="alert">
             ${err.message}
             </div>`);
     });
 }//getCategories
fetchingData();
getCategories();
getData("");