window.addEventListener('load', function(e){
    
 const searchBar = document.querySelector('#search-bar')
 const citiesArray = Array.from(document.querySelectorAll('.city') )
 
 searchBar.addEventListener('input', onSearchItems)

 function onSearchItems(e){
   const searchTerm = e.currentTarget.value.trim().toLocaleLowerCase();
         if(searchTerm === ''){
             resetDisplay()
         }else{
             searchMatchingItems(searchTerm);
         }
   }

   function  searchMatchingItems(searchTerm){
       citiesArray.forEach(function(value, index){
           const city = value.textContent.toLocaleLowerCase();
           if(city.includes(searchTerm)){
               value.classList.add('animate__fadeIn')
             if(value.classList.contains('animate__fadeOut')){
                value.classList.remove('animate__fadeOut')
            }
           }else{
             value.classList.add('animate__fadeOut')
           }
       })
   }

   function resetDisplay(){
    citiesArray.forEach(function(value, index){
 
        if(value.classList.contains('animate__fadeOut')){
            value.classList.remove('animate__fadeOut')
            value.classList.add('animate__fadeIn')
        }
       
    })
   }
 
})