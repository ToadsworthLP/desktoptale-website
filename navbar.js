const NAV_TOGGLE = document.getElementById("nav-toggle");
const TOGGLEABLE_NAV  = document.getElementById("toggleable-nav");

let navbarVisible = false;

window.onload = (event) => {
    NAV_TOGGLE.onclick = (event) => {
        if(navbarVisible) {
            TOGGLEABLE_NAV.style = "display: none;";
        } else {
            TOGGLEABLE_NAV.style = "";
        }

        navbarVisible = !navbarVisible;
    }
};