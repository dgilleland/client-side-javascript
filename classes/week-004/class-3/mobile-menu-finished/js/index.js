window.addEventListener('load', function(e){
 
        const mobileMenuButton = document.querySelector('.mobile-menu-button')
        const mobileMenu = document.querySelector('.mobile-menu')
        const main = document.querySelector('main')
        mobileMenuButton.addEventListener('click', function(e){
           mobileMenu.classList.toggle('hide')
           mobileMenu.classList.toggle('show')
        })
  
})