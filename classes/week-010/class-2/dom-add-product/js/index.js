// var dataArray = appData;
// var productsContainer = document.querySelector(".products-container");
// var productTemplate = document.querySelector("#template").content .firstElementChild;
 
window.addEventListener('load', function(e){
  const imageUpload = document.querySelector('#select-image')
 
  imageUpload.addEventListener('change', onDisplayImage)
  
  function onDisplayImage(e){
      console.log(e.currentTarget.value.replace(`C:\\fakepath\\`,""))
    const preview = document.querySelector('.image-preview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    }

 
})