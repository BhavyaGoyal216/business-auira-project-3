const navbar = document.querySelector('nav');
const header = document.querySelector('header');

const headeroneoptions = {
rootMargin:"-500px 0px 0px 0px "
};


const headeroneobserver = new IntersectionObserver((entries,headeroneobserver )=>{
entries.forEach(entry => {
    if(!entry.isIntersecting){
        navbar.classList.add("nav-scroll");
    }
    else{
        navbar.classList.remove("nav-scroll");
    }
})
}, headeroneoptions);

headeroneobserver.observe(header);

const services = document.getElementById('services-li');
const dropbox = document.getElementById('drop');

services.addEventListener("click",()=>{
    dropbox.classList.toggle("display");
})


const hamburger = document.querySelector(".hamburger");
const span = document.querySelector(".hamburger span");
const nav = document.querySelector(".nav");
const lis = document.querySelectorAll('.nav-li');
hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    span.classList.toggle("span-color");
});
nav.addEventListener("click", ()=>{
    nav.classList.toggle("nav-open");
    span.classList.toggle("span-color");
});