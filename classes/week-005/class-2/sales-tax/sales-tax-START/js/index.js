window.addEventListener("load", function (e) {
  const shipFrom = document.querySelector("#shipFrom");
  shipFrom.addEventListener("change", function (e) {
    const province = e.currentTarget.value.toLowerCase();
    let salesTax = 0;

    switch (province) {
      case "ab":
        salesTax = 1;
        break;
      case "bc":
        salesTax = 0.7;
        break;
      case "sk":
        salesTax = 0.6;
        break;
      case "mb":
        salesTax = 1.2;
        break;
 
      default:
        console.log("no sales tax");
    }
   
  });
});
