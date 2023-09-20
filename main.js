// navbar
let navbar= document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-custom")
    } else{
        navbar.classList.remove("navbar-custom")
    }
})
// card numerate 

let articlesNumber= document.querySelector("#articlesNumber");
let usersNumber= document.querySelector("#usersNumber");
let productsNumber= document.querySelector("#productsNumber");
let contatore= document.querySelector(".contatore");



function createInterval(numeroCicli, contatore, tempo) {
    let counter= 0;
    let interval= setInterval(()=>{
    if (counter<numeroCicli) {
        counter++;
        contatore.innerHTML= counter;
    } else{
        clearInterval(interval)
    }
       

    }, tempo)
} 

createInterval(1000, articlesNumber, 10);
createInterval(500, usersNumber, 20);
createInterval(120, productsNumber, 30);

let contatori= document.querySelector(".contatori")


