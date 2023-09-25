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
    console.log(data);
})