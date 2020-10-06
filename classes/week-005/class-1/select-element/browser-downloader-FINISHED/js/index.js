window.addEventListener('load', function(e){
   const downloadBrowserForm = document.querySelector('#downloadBrowser')
   const browserType  =  document.querySelector('#browserTypes')
   const browserIcon =   document.querySelector('.browser-icon')
   const browserName = document.querySelector('.browser-name')
  const linkContainer = document.querySelector('.download-link-container')
   browserTypes.addEventListener('change', function(e){
     const src = ` img/icons/browsers/${e.currentTarget.value}.svg` 
     browserIcon.src = src
     const currentOption = (e.currentTarget.options[e.currentTarget.selectedIndex])
     const downloadLink = `<a disable class="download-link" href="downloads/${e.currentTarget.value}.zip" download='${e.currentTarget.value}'>download ${e.currentTarget.value} browser</a>`
   browserName.innerHTML = downloadLink;
   })
})