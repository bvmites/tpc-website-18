$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 150) {
    $(".navbar").addClass("navbar-scroll")
  }
  else {
    $(".navbar").removeClass("navbar-scroll")
  }
});