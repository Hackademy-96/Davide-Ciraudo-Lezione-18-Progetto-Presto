// navbar
let navbar= document.querySelector("#navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-custom")
    } else{
        navbar.classList.remove("navbar-custom")
    }
})

fetch("./annunci.json").then((response)=> response.json()).then
((data) => {

    let cardsWrapper = document.querySelector("#cardsWrapper")
    // creazione annunci 

    function createCards(array) {
        cardsWrapper.innerHTML="";
        array.forEach((card, i) => {
        let div = document.createElement("div")
        div.classList.add("col-12", "col-md-6", "col-lg-4", "my-5")
        div.innerHTML=`
                      <div class="card mt-5">
                        <div class="overflow-hidden">
                            <img src="https://picsum.photos/20${i}" class="card-img-top transition" alt="...">    
                        </div>
                        <div class="card-body">
                          <h5 class="card-title">${card.nome}</h5>
                          <p class="card-text">${card.Categoria}</p>
                          <p class="card-text fw-bold">${card.Prezzo}</p>
                          <div class="d-flex justify-content-between fs-4">
                            <button class="btn aggiungiAlCarrelloButton btn-outline-danger">Aggiungi al Carrello</button>
                            <i class="bi bi-heart"></i>
                          </div>
                          
                          <p class="card-text mt-3 text-end"><small class="text-body-secondary ">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
        `
        cardsWrapper.appendChild(div);
    });
    }
   createCards(data);

//    filtro per categoria 
let categoryButton = document.querySelector("#categoryButtons")

    function setCategories() {
    let categories = data.map((el)=> el.Categoria);
    
    let uniqueCategories = [];
    
    categories.forEach((Categoria)=> {
        if (!uniqueCategories.includes(Categoria)) {
            uniqueCategories.push(Categoria)
        }
    })
    uniqueCategories.forEach((uniqueCategories)=>{
        let div = document.createElement("div")
        div.classList.add("form-ceck")
        div.innerHTML=`
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${uniqueCategories}">
            <label class="form-check-label" for="${uniqueCategories}">
              ${uniqueCategories}
            </label>
        `
        categoryButton.appendChild(div)
    })
}
setCategories();

let inputChecks = document.querySelectorAll(".form-check-input")

    function filterByCategory() {
        let arrayButton= Array.from(inputChecks)
        let checked = arrayButton.find((el) => el.checked)

        if (checked.id == "All") {
            createCards(data);
        }else{
            let filtered = data.filter((el)=> el.Categoria == checked.id)
            createCards(filtered);
        }
        
        
    }
    inputChecks.forEach((radioButton)=>{
        radioButton.addEventListener("click", ()=>{
            filterByCategory();
        })

    })

    // filtro per prezzo 

    let inputPrice = document.querySelector("#inputPrice")
    let price = document.querySelector("#price")

    function minMaxPrices() {
        let prices= data.map((el)=> el.Prezzo );
        let max= Math.max(...prices)
        let min= Math.min(...prices)
        inputPrice.max= max;
        inputPrice.value= max;
        inputPrice.min= min;
        price.innerHTML=max;
    }
    minMaxPrices()

    function filterbyPrice() {
        let filtered= data.filter((el)=> el.Prezzo <= inputPrice.value).sort((a,b)=> b.Prezzo - a.Prezzo )
        price.innerHTML= inputPrice.value
        createCards(filtered)
    }
    inputPrice.addEventListener("input", ()=>{
        filterbyPrice();
    })
})

