window.addEventListener("load", function (e) {
   const postContainer = document.querySelector('.post-container')
 
  const wordList = [
    "advice",
    "cave",
    "table",
    "alphabet",
    "of",
    "chicken",
    "spider",
    "do",
    "military",
    "interior",
    "drive",
    "nearer",
    "spent",
    "article",
    "cream",
    "cannot",
    "energy",
    "track",
    "wide",
    "also",
    "dead",
    "sail",
    "bill",
    "soft",
    "inch",
    "folks",
    "writing",
    "mysterious",
    "another",
    "trick",
    "spoken",
    "end",
    "dawn",
    "frog",
    "black",
    "taken",
    "cut",
    "green",
    "individual",
    "shake",
    "busy",
    "per",
  ];
 
    
  generatePosts(15)
 
 

  function getRandomTitle(minWords, maxWords, wordChoices) {
    const wordCount = randomInteger(minWords, maxWords);
    const randomWordList = getRandomWordList(wordCount, wordChoices);
    return createHeadingFromList(randomWordList);
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomWordList(wordCount, wordChoices) {
    let headingWords = [];
    for (var i = 0; i < wordCount; i++) {
      headingWords.push(wordList[randomInteger(0, wordChoices - 1)]);
    }
    return headingWords;
  }

  function createHeadingFromList(words) {
    let heading = "";

    for (var i = 0; i <  words.length; i++) {
        let word = words[i]
        let newWord = ''
        let firstLetter =  word.charAt(0).toUpperCase();
        let restOfWord = word.substr(1, word.length)
        heading += " "+ firstLetter + restOfWord
    }
    return heading
  }
 
function generatePosts(postCount){
    for(var i=0; i <=12; i++){
        const post = `
        <aside class="post">
                   <header class="post-header">
              <h2>${getRandomTitle(3, 7, wordList.length)}</h2>
              <img src="https://picsum.photos/640/480?grayscale&blur=3&random=${parseInt(
                Math.random() * 100
              )}"   crossorigin="anonymous"  loading="lazy"  alt="">
            </header>
               
                     
                     <div class="post-content">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore esse doloribus quas laboriosam. Dolores quae dolorum delectus nemo deleniti officiis sit est, vero libero asperiores ipsam? Expedita, perferendis soluta.</p>
                          <footer class="social">
                           <ul class="post-options">
                             <li> <img src="img/icons/like.svg" alt=""></li>
                             <li> <img src="img/icons/repost.svg" alt=""></li>
                             <li> <img src="img/icons/download.svg" alt=""></li>
                             <li> <img src="img/icons/chatbox.svg" alt=""></li>
                      
                         
                           </ul>
                         </footer>
                     </div>
                    
                   </aside>
        `;
        postContainer.insertAdjacentHTML('afterbegin', post)
       }
}
 
 
});
