$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 150) {
    $(".navbar").addClass("navbar-scroll")
  }
  else {
    $(".navbar").removeClass("navbar-scroll")
  }
});

$.getJSON("./company.json", function(data) {
  templateRegistration(data);
});

var templateRegistration = function(companies) {
  var companyTemplate = $("#companyTemplate").html();
  var copmiledCompanyTemplate = Handlebars.compile(companyTemplate);
  var generatedHTML = copmiledCompanyTemplate(companies);
  $(".companyContainer").html(generatedHTML);
};