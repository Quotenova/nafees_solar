// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Navbar Shadow on Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
".about,.products,.gallery,.why-us,.contact,.stats"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// Loading Screen

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},500);

});
const year = new Date().getFullYear();
const copy = document.querySelector(".copyright");

if(copy){
  copy.innerHTML = `© ${year} Nafees Solar. All Rights Reserved.`;
}