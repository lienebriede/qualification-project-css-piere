/** Makes the hamburger icon change to X when clicked */

const navBtnContainer = document.getElementById("nav-toggle");
const hamburgerMenuBtn = document.getElementById("hamburger-i");

navBtnContainer.addEventListener("click", function () {
    hamburgerMenuBtn.classList.toggle("fa-xmark");
    hamburgerMenuBtn.classList.toggle("fa-bars");
});