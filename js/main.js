window.onscroll = function(){navSticky(); navHorLogo()};

var navbar = document.getElementById("navbar");
var container = document.getElementById("container");
// var sticky = navbar.offsetTop;
var sticky = navbar.offsetHeight;
var navHorMenu = document.querySelector(".nav-hor-menu");
var navbarNav = document.querySelector(".navbar-nav");
var navHorMenuLogo = document.querySelector(".nav-hor-menu-logo");


function navSticky() {
    // pageYoffset and scrollY both are equal
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
        container.style.marginTop = sticky+"px";
    }else{
        navbar.classList.remove("sticky");
        container.style.marginTop = "0";
    }
}

// correcting navbar position
var prevPos =  window.scrollY;
function navHorLogo(){
    var currentPos = window.scrollY;
    if(prevPos > currentPos){
        // navHorMenu.classList.add('active');
        navbarNav.style.transform = "translateY(00px)";
        navHorMenuLogo.style.transform = "translateY(100px)";        
    }else{
        // navHorMenu.classList.remove('active')
        navbarNav.style.transform = "translateY(-100px)";
        navHorMenuLogo.style.transform = "translateY(00px)";
    }
    prevPos = currentPos;
}
