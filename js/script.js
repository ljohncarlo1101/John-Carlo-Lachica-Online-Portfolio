// ===============================
// Sticky Shrinking Header
// ===============================
const header = document.querySelector(".header-wrapper");
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("shrink");
    }
    else {
        header.classList.remove("shrink");
    }
});

// ===============================
// Hamburger Button
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after selecting a section

const navLinks = document.querySelectorAll("#nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// Section Tracking
// ===============================
// Highlight active section while scrolling

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll("#nav-menu a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 250;


        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }


    });



    links.forEach(link => {


        link.classList.remove("active");


        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }


    });


});