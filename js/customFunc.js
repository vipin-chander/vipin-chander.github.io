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
