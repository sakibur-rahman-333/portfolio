// Variables
let hamburger = document.getElementById("hamburger");
let extraNavbar = document.getElementById("extra-nav-bar");
let hamburgerClicked = false;

// Event listener
hamburger.addEventListener("click", (e) => {
  if (!hamburgerClicked) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-x");
    extraNavbar.classList.remove("hide-me");
    extraNavbar.classList.add("show-me");
  } else {
    hamburger.classList.remove("fa-x");
    hamburger.classList.add("fa-bars");
    extraNavbar.classList.remove("show-me");
    extraNavbar.classList.add("hide-me");
  }
  hamburgerClicked = !hamburgerClicked;
});
