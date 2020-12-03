// fetch api
// local url---> path start from the html file that loads the javascript
// remote url --->  https://pathtojson.com/jimoty

/* 
        Promises
        Fetch api returns a promise
                resolve and reject
*/
window.addEventListener('load', function(e){
  const postsRequest = fetch("./js/posts.json")
  let store = []  // backup of data
  let posts =[]  // markup of the post

  postsRequest
  .then((response)=> response.json())
  .then((data)=>{
      // backing up data in my app
      store = [...data]
      // build an array of elements
      createPostElements()
      updatePostDisplay()
  })    

  const createPostElements = function () {
      // buils my elements
      console.log(store)
      const markup = store.map(function(post){
          post.key = Date.now()
          const template = `
          <aside class="post" data-key="${post.key}>
          <header>
            <h2 class="title">${post.title} </h2>
            <p class="author">${post.author} </p>
            <p class="date">${post.date} </p>
          </header>
          <p class="copy">${post.avatar? "no image: image"}</p>
        </aside>
          `
       return document.createRange().createContextualFragment(template).querySelector('aside')
      })
         posts = [...markup]
          
  }

  const updatePostDisplay = function (){
      const postContainer = document.querySelector('.posts')
    
      posts.forEach(function(post){
       postContainer.appendChild(post)
      })
  }
})