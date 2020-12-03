window.addEventListener("load", function (e) {
  let posts = [];
  let postElements=[]

  fetch("./js/posts.json")
    .then((response) => response.json())
    .then((data) => {
      posts = [...data];
      createPostElements();
      updatePostDisplay();
    })
    .catch((error) => console.warn(error));

  const createPostElements = () => {
      const markup = posts.map(post=>{
        const template = `
        <aside class="post">
             <header>
                 <h2 class="title">${post.title}</h2>
                 <p class="author">Author: ${post.author}</p>
                 <p class="date">Added: ${post.date}</p>
             </header>
             <p class="copy">${post.copy}</p>
           </aside>
        `;
        return document.createRange().createContextualFragment(template).querySelector('aside')
       })
      postElements = [...markup]
  };


  const updatePostDisplay = ()=>{
      const display = document.querySelector('.posts');
      postElements.forEach(post=>{
         display.appendChild(post)
      }) 
  }
   
});
