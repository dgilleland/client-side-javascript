$(document).ready(function () {
  let store = [];
  var source = $("#lesson-template").html();
  var template = Handlebars.compile(source);
 

  $.getJSON("./js/lessons.json", function (posts) {
    store = [...posts];
        $.each(posts, (index, post)=>{
            var html = template(post);
            $("main").append(html)
        })
  });
});
