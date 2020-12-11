$(document).ready(function () {
  // querySelector("css")  querySelectorAll("css")
  // js  var
  // const temp = $("aside").first()
  // style objects
  // $styleObj = {
  //     backgroundColor:"tomato",
  //     color: "#ffffff",
  //     boxShadow:"0 0 5px 0 black"
  // }

  // $resetStyleObj = {
  //     backgroundColor:"#ffffff",
  //     color: "inherit",
  //     boxShadow:"none"
  // }

  // //jquery var
  // $temp =  $("aside.display")
  // $temp.css($styleObj)

  // $("aside.form").addClass("test")

  // creating new markup
  //$markup = $("<div/>").text("this is a new div element")  // textContent   text()
  //$stringMarkup = "<div><p>child of a div</p></p></div>" //innerHTML  html()
 

  // TASK ADD THE VAL() FROM THE INPUT ELEMENT ON SUBMIT TO THE
  // .display aside element
  // create and ul
  // add each new li to the ul
//    $("<ul/>").appendTo(".items")
//   $("form").submit((e)=>{
//           e.preventDefault()
//           $inputText = $("#toDoItem").val()
//           $("<li/>").text($inputText).appendTo(".items ul")
//           e.currentTarget.reset()
//   })

// async data loading
let store = [];

 

$.getJSON( "./js/posts.json", function( posts ) {
    store = [...posts]
    $(".items").loadTemplate($("#template"), posts)
 
    
    // $.each( data, function( index, obj ) {
    //      $template = $("<li/>")
    //      $template.text(obj.title)
    //      console.log($template.text())
    //      $template.appendTo(".items")
    //      $template.click((e)=>{
    //          $(e.currentTarget).remove()
    //      })
          
    // })
   
})
	

});
