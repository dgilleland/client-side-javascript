// application scope
window.addEventListener('load', function(e){
    const switchButton = document.querySelector('button')
    const lightBulb = document.querySelector('.light-switch img')
    let switchState = false
    switchButton.addEventListener('click', function(){
         if(switchState){
            lightBulb.src = 'img/light-off.jpg'
            switchButton.textContent = 'switch on';
            switchState = false;
         }else{
             
             lightBulb.src = 'img/light-on.jpg'
             switchButton.textContent = 'switch off';
             switchState = true;
         }
       
     
    });


  
})