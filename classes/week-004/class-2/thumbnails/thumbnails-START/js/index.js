window.addEventListener('load', function(e){
    const thumbnailButtons = document.querySelector('.image-options')
    const thumbnailViewer = document.querySelector('.image-display img')

    thumbnailButtons.addEventListener('click', function(e){
         if(e.target.src != undefined){
             thumbnailViewer.src = e.target.src
             
    
         }
    })
})