window.addEventListener("load", function (e) {
   // CART OBJECT

  const cart ={
    itemsInCart:0,
    cartItems:[1,2,2,3,3],
    cartDisplay: document.querySelector('.cart-count'),
    addItemToCart: () =>{
      cart.cartDisplay.textContent = cart.itemsInCart += 1
    } 
  }


/*   
    Modal Window
   document.querySelector('figure').addEventListener("click", (e)=>{
   document.querySelector('.modal').classList.toggle('hidden')
  })
  document.querySelector('.modal').addEventListener('click', (e)=>{
     e.currentTarget.classList.toggle('hidden')
  })
  
 */
  // START HERE IF YOU DO NOT WANT TO ADD THE MODAL WINDOW
  let store = [];
  let productElements = [];
  const products = fetch("./js/products.json").then((response) =>
    response.json()
  );

  products.then((data) => {
    /*   
  Make a copy of the array that contains the parse JSON objects. I will not add or remove items from this array I will not mutate it meaning I will not change it. Its the source of truth for the app.  I will ask questions but never change it.
  */
    store = [...data];   
    /* 
      Now I am goign to create the markup using a custom method called createProductElements(). This method returns an array. 
      
      I am using the spread operator to seed my productElements array with the values returned from calling createProductElements.  
    */
    productElements = [...createProductElements()];
    /* 
     Now that I have created the markup then next thing I will do is add the products
     to the DOM using the productElements array that was constructed in the last step.
    */
    updateProductDisplay();
  });

  /* 
   Method createProductElements()
   This method uses the store array data and the concept of tempating to create
   the markup that I require for each product. The method also adds the functionality
   to add an item to the cart.
  */

  function createProductElements( ) {
    const newItems = store.map(function (product, index) {
      const thumbnail = `img/products/${product.url}`;
      const price = ` $${product.price}.00/<span class="currency">CAD</span>`;
      const productTemplate = `
      <aside class="print">
        <header class="print-header">
          <h3 class="print-title"> ${product.title}</h3>
          <p class="print-price"> ${price}</p>
        </header>      
        <img class="print-image" src="${thumbnail}" alt="${product.title}" /> 
        <p class="print-details">${product.description} </p>      
        <footer class="print-footer">      
            <button class="add-to-cart" data-key="${product.id}"> add to cart </button>
        </footer>
      </aside> 
      `;
      /* 
        Take the  template string and convert it to an element node.
       */
      const item = document
        .createRange()
        .createContextualFragment(productTemplate)
        .querySelector("aside");

      /* 
      Add a click event to the add to cart button for each item in the store
      */
      item.querySelector('.add-to-cart').addEventListener('click', onAddItemToCart)

     
      return item;
    });

    return newItems
  }

/*   
Fuction
updateProductDisplay() 

Description
This method uses the productElements array which contains the markup for a individual product and adds it to the prints container located in the index.html document

Parameters
none
*/
  const updateProductDisplay = function () {
    const prints = document.querySelector(".prints");
    productElements.forEach((product) => {
      prints.appendChild(product);
    });
  };


  // Add To Cart Event Handler For Products
  const onAddItemToCart = function (e){
     cart.addItemToCart();
  }

});
