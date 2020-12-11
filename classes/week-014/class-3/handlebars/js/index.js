$(document).ready(function () {
   
    let store = [];
    const template = $('#handlebars-demo').html();
    
     
    
    $.getJSON( "./js/posts.json", function( posts ) {
        store = [...posts]
     
        const templateScript = Handlebars.compile(template);
     
        $.each(posts, (index, post)=>{
           const markup = templateScript(post)
           $("main").append(markup)
        })
    })
    });