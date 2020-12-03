const products = [
  {
    id: "0",
    url: "img/picture-1.jpg",
    title: "Heduck",
    descrption:
      "Ullamco excepteur Lorem culpa  er olored repr nderit et ipsum amet elit ut aute ex magna.",
    price:1250
  },
  {
    id: "1",
    url: "img/picture-2.jpg",
    title: "Fields In Mourn",
    descrption: "Sit elit ad irure consectetur aute consequat voluptate.",
    price:3250
  },
  {
    id: "2",
    url: "img/picture-3.jpg",
    title: "Ble du Sime",
    descrption:
      "Lorem commodo id cupidatat laborum ex consectetur dolor culpa laboris fugiat aute.",
      price:5000
  },
  {
    id: "3",
    url: "img/picture-4.jpg",
    title: "Captiain Ice",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
      price: 5500
  },
  {
    id: "4",
    url: "img/picture-5.jpg",
    title: "Green Light",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
    price: 1900
  },
  {
    id: "5",
    url: "img/picture-6.jpg",
    title: "Gread",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
    price: 4580
  },
  {
    id: "6",
    url: "img/picture-7.jpg",
    title: "Picture In Pain",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
      price: 6500
  },
  {
    id: "7",
    url: "img/picture-8.jpg",
    title: "Labour In Diesle",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
      price: 11200
  },
  {
    id: "8",
    url: "img/picture-9.jpg",
    title: "Northern Lights",
    descrption:
      "Magna laborum pariatur dolor Lorem irure dolor pa laboris fugiat aute.",
      price: 8700
  }
];

// spread operator for objects
const jimo = {a:1, b:3, c:5, d:-9}
const tip = {...jimo}
 tip.b = 12;
 

 // spread operator for arrays
const arrayCopy = [...products]
// helpful tricks creating array from object.
const keys = Object.values(arrayCopy[0])
arrayCopy.forEach(function(item, index){
    Object.keys(item).forEach((key,index)=>{
          // console.log(item[key])
    })
})
 

const amount = products.reduce(function(acc, item){
  acc  = acc + item.price
  return acc
}, 0)

const highest = arrayCopy.sort(function(a,b){
  if(a.price < b.price){
    return  -1
  }
})
 
 