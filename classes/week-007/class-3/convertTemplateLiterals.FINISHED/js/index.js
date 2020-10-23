window.addEventListener("load", function (e) {
  // The call to getTeam members is just to mimic a call to external data
  // getTeamMembers Returns a CSV.
  const teamData = getTeamMembers();
  // Convert CSV File to an arry using the comma as the item deliminator.
  const playersArray = teamData.split(",");


  // Creating an unordered list elment using javascript. This is going to contain the list items
  //  we will create from the playersArray values
  const ul = document.createElement("ul");


  // Get a reference to the element that your going to place the marku into.
  const markupContainer = document.querySelector(".markup-container");

 
// using an Array.forEach() loop cycle through the players and create the list item markup
  playersArray.forEach(function (value, index) {

    // create the markup as a template literal
    let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`;


    // use the following code to create a document fragment that converts your template literal to
    // an element Node.
    let documentFragment = document.createRange().createContextualFragment(templateLiteral);

    // extract the markup from the document fragment using querySelector
    let markup = documentFragment.querySelector("li");

    // add the list item to the unordered list we created earlier.
    ul.appendChild(markup);

    // now that the li are element nodes we can add and event listener to them
    // note I am adding a named event handler and not an anonymous function
    markup.addEventListener("click", onRemoveItem);
    
  });

   function onRemoveItem(e){
     e.currentTarget.parentNode.removeChild(e.currentTarget)
   }
  // add the markup that I create and place it into the div
  markupContainer.appendChild(ul)
});
