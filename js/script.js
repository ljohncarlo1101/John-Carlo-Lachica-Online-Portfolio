// ===============================
// Sticky Shrinking Header
// ===============================


const header = document.querySelector(".header-wrapper");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("shrink");


    }


    else{


        header.classList.remove("shrink");


    }


});





// ===============================
// Mobile Hamburger Menu
// ===============================


const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");



menuToggle.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});





// ===============================
// Close Menu After Clicking Link
// ===============================


const navLinks = document.querySelectorAll("#nav-menu a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});