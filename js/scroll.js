var scrollUpBtn = document.getElementById("up-icon");
var scrollNavBar = document.getElementById("fixed-nav");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollUpBtn.style.display = "block";
    scrollNavBar.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
    scrollNavBar.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}