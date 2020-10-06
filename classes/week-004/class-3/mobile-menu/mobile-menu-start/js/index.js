// show and hide 
// code it
// css animation intro
// application scope
window.addEventListener('load', function(e){
    const menuButton = document.querySelector('.mobile-menu-button')
    const menuDisplay = document.querySelector('.mobile-menu')

    menuButton.addEventListener('click', function(e){
        // e.currentTarget         xxx.addEventListener   xxx always is the currentTarget
        // e.target parent has children then its the item click on  (child item)
        //   remove add contains toggle
         menuDisplay.classList.toggle('hide')
         menuDisplay.classList.toggle('show')

    })
})