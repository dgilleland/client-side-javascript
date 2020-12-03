 window.addEventListener('load', function(e){
 
 // Array.forEach when you want to cycle through data and build dom
 // do no use the following to make a copy of an array this only is a reference to the original array
// const productsCopy = products;

// create a new array use the spread opertor  ...
// because we do not want to mutate the orignal data CHANGE THE ORIGINAL DATA
const productsCopy = [...products]

// Reduce

 const totalSales = productsCopy.reduce(function(totalSales, item){
        totalSales = totalSales + item.sales
      
         return totalSales
}, 0)

const backOrder = productsCopy.reduce(function( total, items){
          
              
           if(items.backorder != null){
             console.log(items.backorder)
             total = total + items.backorder
           }
           return total
            
}, 0)

   console.log(backOrder)
 
 })