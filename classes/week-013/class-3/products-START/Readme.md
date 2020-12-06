#  CPSC1520 Client Side JavaScript

## Simple Store
 In this example your going to import products.json and display the products in the DOM. The markup for the template is in the html file. Do not use the <template> element as this creates a document fragment just copy the aside element if your intend to use a template literal to create the product markup.

 ```html   
            <aside class="print">
              <header class="print-header">
                <h3 class="print-title"></h3>
              </header>
              <img class="print-image" src="" alt="" />
              <p class="print-details"></p>
              <footer class="print-footer">
                <p class="print-price"></p>
                <button class="add-to-cart"></button>
              </footer>
            </aside>
 ```  
 The css is all done for you and so is the css for the modal window. Once you have the products displaying in the DOM go back to your template code and add a click event to the button and add the product to the cart. This event should update the cart count.

 Challange yourself and see if you can add a new cart item? How would you do that.

 
 