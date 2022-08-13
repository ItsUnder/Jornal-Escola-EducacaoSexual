window.onscroll = function() {scrollBarProgressIndicator()};

function scrollBarProgressIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 120;
  document.getElementById("myBar").style.width = scrolled + "%";
}
function changeThemes() {
  document.body.classList.toggle("dark");
}
function redirectHome() {
  location.replace("https://under-117.github.io/Jornal-Escola-Home/")
}
