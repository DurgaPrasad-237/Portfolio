let fabars = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');
let viewlinks = document.querySelector('.viewlinks');
let count = 0;
fabars.addEventListener('click',() =>{
    viewlinks.classList.add("afterclick")
    viewlinks.classList.remove("afterclose")
});
close.addEventListener('click',() =>{
    viewlinks.classList.add("afterclose")
    viewlinks.classList.remove("afterclick")
});