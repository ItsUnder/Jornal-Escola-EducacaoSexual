window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 200;
  document.getElementById("myBar").style.width = scrolled + "%";
}
function mudaTema() {
  document.body.classList.toggle("dark");
}