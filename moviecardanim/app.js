// Movement animator pre-requisites
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Animate elements
const movie = document.querySelector('.movie img');
const title = document.querySelector('.title');
const subGenre = document.querySelector('.info h3');
const purchase = document.querySelector('.purchase button');
const ratings = document.querySelector('.ratings');


// Moving Animation
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Animate In 
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    subGenre.style.transform = "translateZ(125px)";
    ratings.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

// Animate Out 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = "translateZ(0px)";
    subGenre.style.transform = "translateZ(0px)";
    ratings.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

