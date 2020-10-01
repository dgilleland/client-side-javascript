  /*    
            Start With Creating An Application Scope.
   */

window.addEventListener('load', function(e){
     const thumbnailButtons = document.querySelector('.image-options ');
     const thumbnailViewer = document.querySelector('.image-display img')
 
     thumbnailButtons.addEventListener('click', function(e){

      if(e.target !== null){
        console.log(e.target.getAttribute('src'))
        thumbnailViewer.src = e.target.getAttribute('src')
      }
     })
})