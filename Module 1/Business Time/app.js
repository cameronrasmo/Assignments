let navbarDropdownPanel = document.querySelector(".navbar-dropdown-panel");
let navbarDropdownPanelHome = document.querySelector(".navbar-dropdown-home");
let navbarDropdownPanelContact = document.querySelector(".navbar-dropdown-contact");
let navbarDropdownPanelAbout = document.querySelector(".navbar-dropdown-about");

let navbarMobileContainer = document.querySelector(".navbar-mobile-container");
let navbarMobileMenuIcon = document.getElementById("menu");
let navbarMobileCloseIcon = document.getElementById("close");

let bodySubHeader = document.querySelector(".body-sub-header");
let bodyMainHeader = document.querySelector(".body-main-header");
let bodyIconSection = document.querySelector(".body-icon-section");

function toggle(){
    if(!toggle){
        navbarDropdownPanel.style.top = "-1200px";

        navbarDropdownPanelHome.style.color = "#f1f1f1";
        navbarDropdownPanelContact.style.color = "#f1f1f1";
        navbarDropdownPanelAbout.style.color = "#f1f1f1";

        navbarDropdownPanelHome.style.paddingTop = "0px";
        navbarDropdownPanelContact.style.paddingTop = "0px";
        navbarDropdownPanelAbout.style.paddingTop = "0px";

        navbarMobileMenuIcon.style.opacity = "1";
        navbarMobileCloseIcon.style.opacity = "0";
    }
    else{
        navbarDropdownPanel.style.top = "0px";

        navbarDropdownPanelHome.style.color = "#000000";
        navbarDropdownPanelContact.style.color = "#000000";
        navbarDropdownPanelAbout.style.color = "#000000";

        navbarDropdownPanelHome.style.paddingTop = "50px";
        navbarDropdownPanelContact.style.paddingTop = "50px";
        navbarDropdownPanelAbout.style.paddingTop = "50px";

        navbarMobileMenuIcon.style.opacity = "0";
        navbarMobileCloseIcon.style.opacity = "1";
    }
    toggle = !toggle;
}

navbarMobileContainer.addEventListener("click", toggle);
