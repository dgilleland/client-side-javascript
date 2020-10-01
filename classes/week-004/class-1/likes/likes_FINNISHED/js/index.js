window.addEventListener('load', function(e){
    const thumbsUp =     document.querySelector('.thumb-up')
    const  thumbsDown =   document.querySelector('.thumb-down')
 
    let likes = 0;
    let dislikes = 0;
    

    thumbsDown.addEventListener('click', function(e){
           e.currentTarget.querySelector('span').textContent =  ++dislikes 
    })

    thumbsUp.addEventListener('click', function(e){
       e.currentTarget.querySelector('span').textContent =   ++likes 
 })

  
})