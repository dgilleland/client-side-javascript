 
window.addEventListener("load", function (e) {
  const browserTypes = document.querySelector("#browserTypes");

  
  browserTypes.addEventListener("change", function (e) {
    const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex]
    updateBrowserIcon(e.currentTarget.value)
    updateDetails(selectedOption.dataset.runtime, selectedOption.dataset.version)
  });

 function updateBrowserIcon(whichIcon){
  const browserIcon = document.querySelector(".browser-icon");
  browserIcon.src = ` img/icons/browsers/${whichIcon}.svg`;
 }

function updateDetails(jsRuntime, browserVersion){
  const runtime = document.querySelector('.additional-info li:nth-child(1)')
  const version =  document.querySelector('.additional-info li:nth-child(2)')
  runtime.textContent = `JS Engine: ${jsRuntime}`
   version.textContent = `Version: ${browserVersion}`
 
}

});



