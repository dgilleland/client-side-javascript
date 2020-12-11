// load event
$appData = [{ firstName: "jillyian", lastName: "foley" }];
$(window).on("load", function () {
  console.log("Window Loaded");
});
// DOM Content Ready
$(document).ready(() => {
  // load external json data
  $.getJSON("./js/posts.json", function (data) {
 
    const markup = createMarkup(data);
    markup.forEach(post => {
      $(".display").append(post)
    })
    $(".display button").click((e)=>{
      console.log(e.currentTarget.dataset.key)
        
    })
  }).fail(function () {
    console.log("An error has occurred.");
  });

  function createMarkup(posts) {
    const newPosts = posts.map((post, index) => {
   
      var jimo =  `<aside class="post">
      <header>
      <h2>${post.title}</h2>
      <p>${post.author}</p>
      <p>${post.date}</p>
      </header>
      <p>${post.copy}</p>
      <footer>
      <button data-key="${post.key = uuidv4().slice(0,8)}">remove</button>
      </footer>
      </aside>`  
      return $.parseHTML(jimo)
    });
  
    return newPosts

 
  }

   
});
