$(function() {
  var header = $(".header");
  var logo = $(".navbar-brand img");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll <= 0) {
      header.removeClass("active");
      logo.attr("src", "images/logo-colored.svg");
    } else {
      header.addClass("active");
      logo.attr("src", "images/logo-colored.svg");
    }
  });
});

// <script type="text/javascript">
// function PopUp(hideOrshow) {
//     if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
//     else document.getElementById('ac-wrapper').removeAttribute('style');
// }
// window.onload = function () {
//     setTimeout(function () {
//         PopUp('show');
//     }, 5000);
// }
// </script>

// $(document).ready(function() {
//   $(".hem-btn").click(function() {
//     $(".side-menu").addClass("open");
//     $("body").addClass("noscroll");
//   });
//   $(".hem-close").click(function() {
//     $(".side-menu").removeClass("open");
//     $("body").removeClass("noscroll");
//   });
// });
