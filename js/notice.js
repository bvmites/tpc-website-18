$(document).ready(function () {
  $.getJSON("./notice.json", function (data) {
    TemplateRegistration(data);
  });

  var TemplateRegistration = function (notices) {
    console.log(notices);
    var noticeTemplate = $("#noticeTemplate").html();
    var compiledNoticeTemplate = Handlebars.compile(noticeTemplate);
    var generatedHTML = compiledNoticeTemplate(notices);
    $(".noticeContainer").html(generatedHTML);
  };

});