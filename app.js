const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const body = document.body;
const galleryTags = document.querySelectorAll(".gallery a");
const seeMore = document.querySelector("#galeria-btn")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active")
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    body.classList.toggle("overy");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("is-active")
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        })
        body.classList.toggle("overy");
    })
})

seeMore.addEventListener("click", () => {

});