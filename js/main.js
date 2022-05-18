window.onscroll = function() {navSticky()};
        
var navbar = document.getElementById("navbar");
var container = document.getElementById("container");
// var sticky = navbar.offsetTop;
var sticky = navbar.offsetHeight;

function navSticky() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
        container.style.marginTop = sticky+"px";
    }else{
        navbar.classList.remove("sticky");
        container.style.marginTop = "0";
    }
}