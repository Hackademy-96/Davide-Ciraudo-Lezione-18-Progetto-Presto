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
    if  (counter<numeroCicli) {
        counter++;
        contatore.innerHTML= counter;
    } else{
        clearInterval(interval)
    }
       

    }, tempo)
} 

let isEntered= false;


let observer= new IntersectionObserver((entries)=>{
    entries.forEach( (entry)=>{
        if (entry.isIntersecting) {
            createInterval(1000, articlesNumber, 10);
            createInterval(500, usersNumber, 20);
            createInterval(120, productsNumber, 30);
            isEntered=true
        }
    })
})

observer.observe(articlesNumber)

// Annunci Card 

let annunci = [
    {nome: "Martelletti", categoria:"Accorderia", prezzo:"50$", url:"https://picsum.photos/201"},
    {nome: "Tastiera", categoria:"PressureTecnology", prezzo:"200$", url:"https://picsum.photos/202"},
    {nome: "Corde", categoria:"Accorderia", prezzo:"1.000$", url:"https://picsum.photos/203"},
    {nome: "Pedali", categoria:"PressureTecnology", prezzo:"150$", url:"https://picsum.photos/204"},
    {nome: "VISCOUNT Opera 450", categoria:"Pianoforte Acustico", prezzo:"37.000$", url:"https://picsum.photos/205"},
]

let annunciWrapper= document.querySelector("#annunciWrapper")

annunci.forEach((annuncio, i)=>{
    if (i>= annunci.length - 3){

     let div = document.createElement("div")
    div.classList.add("col-12", "col-md-4", "col-lg-3", "my-5")
    div.innerHTML=`
                  <div class="card mt-5">
                    <div class="overflow-hidden">
                        <img src=${annuncio.url} class="card-img-top transition" alt="...">  

                    </div>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     New
                        <span class="visually-hidden">unread messages</span>
                      </span>
                    <div class="card-body">
                      <h5 class="card-title">${annuncio.nome}</h5>
                      <p class="card-text">${annuncio.categoria}</p>
                      <p class="card-text fw-bold">${annuncio.prezzo}</p>
                      <div class="d-flex justify-content-between fs-4">
                        <button class="btn aggiungiAlCarrelloButton btn-outline-danger">Aggiungi al Carrello</button>
                        <i class="bi bi-heart"></i>
                      </div>
                      
                      <p class="card-text mt-3 text-end"><small class="text-body-secondary ">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
    `
    annunciWrapper.appendChild(div)   
    }
    
})

let heart = document.querySelectorAll(".bi-heart");

heart.forEach((cuori)=>{
    cuori.addEventListener("click", ()=>{
        cuori.classList.toggle("bi-heart")
        cuori.classList.toggle("bi-heart-fill")
        cuori.classList.toggle("text-danger")
    })
});

const carrelloBadge = document.getElementById('carrelloBadge');

var addButtonElements = document.querySelectorAll('.aggiungiAlCarrelloButton');

let numeroNelCarrello= 0
addButtonElements.forEach((element)=> {
    
  element.addEventListener('click', ()=> {
    numeroNelCarrello++;

    carrelloBadge.innerHTML = numeroNelCarrello;
    
  });
});


