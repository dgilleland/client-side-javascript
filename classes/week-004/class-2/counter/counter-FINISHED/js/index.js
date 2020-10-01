window.addEventListener('load', function(){
  const incrementButton = document.querySelector('.forward')
  const decrementButton  = document.querySelector('.back')
  const counterDisplay = document.querySelector('.counter')
  let count = 0

  incrementButton.addEventListener('click', onUpdateCounter)
  decrementButton.addEventListener('click', onUpdateCounter)

  function onUpdateCounter(e){
     if (e.currentTarget.classList.contains('forward')){
        ++ count
        if(count >= 10){
          count =10
        }
     }else{
       -- count
       if(count <= 0){
        count =0
      }
     }
    
     counterDisplay.textContent = count
  }
})