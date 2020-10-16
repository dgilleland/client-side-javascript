 
window.addEventListener("load", function (e) {
  const browserTypes = document.querySelector("#browserTypes");
  const browserIcon = document.querySelector(".browser-icon");
  browserTypes.addEventListener("change", function (e) {
    const selectedOption = e.currentTarget.options[e.currentTarget.selectedIndex]
    updateLink(e.target.value);
    updateDetails(selectedOption.dataset.runtime, selectedOption.dataset.version)
    browserIcon.src = ` img/icons/browsers/${e.currentTarget.value}.svg`;
  });

function updateLink(browserType){
  const downloadLink = document.querySelector(".download-link");
 const downloadPath = `downloads/${browserType}.zip`
 const download = browserType;
 downloadLink.href = downloadPath;
 downloadLink.download = download;
 downloadLink.textContent = `download  ${browserType} browser`
}

function updateDetails(jsRuntime, browserVersion){
  const runtime = document.querySelector('.additional-info li:nth-child(1)')
  const version =  document.querySelector('.additional-info li:nth-child(2)')
  runtime.textContent = `JS Engine: ${jsRuntime}`
   version.textContent = `Version: ${browserVersion}`
 console.log(jsRuntime, browserVersion)
}

});



