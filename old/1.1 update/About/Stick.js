window.onscroll = function() {myFunction()};

var navtab = document.getElementById("navTab");

// Get the offset position of the navbar
var sticky = navtab.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}