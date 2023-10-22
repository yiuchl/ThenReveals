// Splash Screen
var splashScreen = document.querySelector(".splash");
splashScreen.addEventListener("click", () => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {
    splashScreen.classList.add("hidden");
  }, 700);
});

// Side Navigation Menu Bar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("hamburger").style.marginLeft = "0";
}

// Responsive Top Navigation
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// // Modal > A
// // Get the modal
// var modal = document.getElementById("myModal");
// var modal2 = document.getElementById("myModal2");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn2 = document.getElementById("myBtn2");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// var span2 = document.getElementsByClassName("close2")[0];

// // Show/hide the grid
// var griddy = document.getElementById("griddy");

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
//   griddy.style.display = "none";
// };
// btn2.onclick = function () {
//   modal2.style.display = "block";
//   griddy.style.display = "none";
// };

// // When user clicks on (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
//   griddy.style.display = "grid";
// };
// span2.onclick = function () {
//   modal2.style.display = "none";
//   griddy.style.display = "grid";
// };

// // When user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     griddy.style.display = "grid";
//   }
// };
// window.onclick = function (event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//     griddy.style.display = "grid";
//   }
// };
