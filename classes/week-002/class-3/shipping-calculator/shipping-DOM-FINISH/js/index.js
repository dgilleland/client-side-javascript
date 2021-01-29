// Get Reference Variables to the input and label elements
 const calculateButton = document.querySelector('label')
 const shippingWeight = document.querySelector('input')
 const shippingRateDisplay = document.querySelector('.shipping-rate')
const shippingRate = 5;
// create ref var  to the logo
// add a click event to the logo and log text to the console

// create ref var to the login button
// add click event to the login button log you want to login
/* 
 Template Literal 
    `sdfsdafsfsdf  ${your js code now}`
     console.log(`ldflfjlsjflsjflsajf   ${shippingRate}` )
     console.log(`<p>${shippingRate}</p>`)
 */

//  Event
calculateButton.addEventListener('click', function(){
     // read in the value of the input element
     // calculate the shipping rate based on the input
     // echo the rate to the console.
     let rate =   shippingWeight.value * shippingRate;
     shippingRateDisplay.textContent = '$' + rate + '.00';
     shippingRateDisplay.style.fontSize = "3rem"
})

 

 