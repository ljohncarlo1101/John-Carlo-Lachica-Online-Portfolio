// ===============================
// Sticky Shrinking Header
// ===============================
const header = document.querySelector(".header-wrapper");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 10){
        header.classList.add("shrink");
    }
    else{
        header.classList.remove("shrink");
    }
});