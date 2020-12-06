// https://jsonplaceholder.typicode.com/comments
/* 
           Display Post Data From JSONPlaceholder test API
           -| lets assume that any post with a postID of 6 is a recent post
           -| we will search for the posts and them to the DOM

           Fetch API
           -| The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
           -| It returns a Promise that resolves to the Response for the requested resource
       
           fetch promise resolve  (.then())
           -| The Response Headers Contains The Data
           -| The JSON file that was requested is contained in the response object
           -| We extract the data from the body of the response with the .json() method

           .json()
           -| this method extracts the json data from the response
           -| the method is an asynchronous task parsing the JSON file is not done immediatly it takes time
           -| because parsing the JSON takes time .json() returns a promise
           -| this requires us to use another .then()
           -| the resolve() method of the .json() promise is the json data converted to an array of objects.
             
           fetch promise reject  (.catch())
           -| if during any part of the promise chain there is an error we can catch the error.
           -| How you handle the error is dependant on what your doing with the data.
           
*/
window.addEventListener("load", function (e) {
  // store is an array of javascript objects
  // it is used as a single source of truth and it now wise to manipulate or change the data in the store
  // use array methods that return new arrays or create a copy of the store using array destructuring.

  let store = [];
  let getPostData = fetch("https://jsonplaceholder.typicode.com/comments");

  getPostData
    .then((response) => response.json())
    .then((postData) => {
      // using the spread operator to take the elements in the postData
      // and add each object to the store array thus making a copy of the data
      store = [...postData];

      // search the store for recentposts posts with a postId of 6
      // sending to argument to the function the property to search
      // and the value of the property.
      const recentPosts = searchPostsByPropertyAndValue("postId", 6);
      const markup = formatRecentPost(recentPosts);
      updatePostDisplay(markup, document.querySelector(".display"));
    });
  /**
   * @method searchPostsByPropertyAndValue
   * @description Method searches the post array store based on a searchKey and searchValue for object property and value and returns an array of posts.
   * @param {string} searchKey  the post object property to search
   * @param {string} searchValue the search term to find
   * @returns {array}
   */
  const searchPostsByPropertyAndValue = (searchKey, searchTerm) => {
    const matchingPosts = store.filter((post) => {
      if (post[searchKey] === searchTerm) {
        return post;
      }
    });
    return matchingPosts;
  };
  /**
   * @method formatRecentPosts
   * @description Takes an array of posts and returns an array of
   *                       post elements.
   * @param {array} post - List  of post objects
   * @returns {array}
   */
  const formatRecentPost = function (posts) {
    const postMarkup = posts.map((post) => {
      const template = `
           <aside class="post">
              <header>
              <h2>${post.name}</h2>
               <p>${post.email}</p>
              </header
              <p>${post.body}</p>
           </aside>
        `;

      return document
        .createRange()
        .createContextualFragment(template)
        .querySelector("aside.post");
    });
    return postMarkup;
  };
  /**
   *
   * @method updatePostDisplay
   * @description Method takes an array of posts and a container element and adds the posts to the container. The container must be already added to the dom.
   * @param {array} post - List of the posts
   */
  const updatePostDisplay = function (posts, container) {
    posts.forEach((post) => {
      container.appendChild(post);
    });
  };
});
