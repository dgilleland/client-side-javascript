$(document).ready(function () {
  let store = [];
 
  $.getJSON("./js/lessons.json", function (posts) {
    store = [...posts];

    //formatter comes before the template
    $.addTemplateFormatter("AFormatter",
    function(value, template) {
        return  template+value;
    });
    $("main").loadTemplate($("#template"), posts)

  });
});
