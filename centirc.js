
let menutoggle = document.querySelector("#hidden-menubar")
let sidebar = document.querySelector(".nav")

menutoggle.addEventListener("click",()=>{
    sidebar.classList.toggle("navx")
})