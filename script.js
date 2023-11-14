"use strict"

const hamburgerItems = document.querySelector(".hamburger-items");
const hamburgerBtn = document.querySelector(".hamburger");
const openIcon = document.querySelector("#menu__icon");
const closeIcon = document.querySelector("#close__icon");


function toggleMenu() {
    if (hamburgerItems.classList.contains("showMenu")) {
        hamburgerItems.classList.remove("showMenu");
        closeIcon.style.display = "none";
        openIcon.style.display = "block"
    }

    else { 
        hamburgerItems.classList.add("showMenu");
        closeIcon.style.display = "block";
        openIcon.style.display = "none"
}
}

function closeMenuClickedOutside(e) {
    if (!hamburgerItems.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerItems.classList.remove("showMenu");
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    }
}
    

hamburgerBtn.addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuClickedOutside);