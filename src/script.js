const heroSection = document.querySelector(".hero-section");
const imgContent = document.querySelector(".img-content");
const imgHov = document.querySelectorAll(".img-hov");
const posts = document.querySelector(".posts");
const postCont = document.querySelectorAll(".posts-cont");
const mobIcon = document.querySelector(".mob-icon");
const mobLi = document.querySelector(".mob-li");
const subBtn = document.querySelector("#sub-btn");
const bord = document.querySelector(".bord");
const form = document.querySelector(".form");

mobIcon.addEventListener("click", ()=>{
  mobLi.classList.toggle("show");
});

subBtn.addEventListener("click", ()=>{
  bord.classList.toggle("active");
});

form.addEventListener('click', (e)=>{
  e.preventDefault();
})

// posts.addEventListener("mouseover", ()=>{
  
// });