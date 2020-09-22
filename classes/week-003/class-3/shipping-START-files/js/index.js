// Get Reference Variables to the input and label elements
const calculateButton = document.querySelector("label");
const shippingWeight = document.querySelector("input");
const shippingRateDisplay = document.querySelector(".shipping-rate");
const errorMessage = document.querySelector(".warning");
const shippingRate = 5;

//  Event
calculateButton.addEventListener("click", function () {
  // check the input data for the correct value
  // if there are no errors then calculate the shipping rate
  let userInput = shippingWeight.value.trim();
  // is the input empty
  if (userInput.length === 0) {
    errorMessage.querySelector('span').textContent = "please enter the shipping weight in kilograms";
    errorMessage.classList.remove('hide')
    errorMessage.classList.add('show')
  }
  // check to see if the user input is a number
//   userInput = parseFloat(userInput);
//   if (isNaN(userInput)) {
 
//      errorMessage.querySelector('span').textContent = "enter a shipping weight do not add any text"
//      errorMessage.classList.remove('hide')
//   } else {
//     calculateShippingCost(userInput);
//   }
// 
});

function calculateShippingCost(weight) {
  let rate = shippingWeight.value * shippingRate;
  shippingRateDisplay.textContent = "$" + rate + ".00";
  shippingRateDisplay.style.fontSize = "3rem";
}


shippingWeight.addEventListener('input', function(e){
     console.log(e.target.value)
 
})