console.log("Lets play with food");

const foodContainerSelector = document.querySelector("#food-container")

const url = "http://localhost:8088/food"

const printToDOM = (foodFactory) =>{
  console.log("printToDOM is being called")
 foodContainerSelector.innerHTML += foodFactory
}

const foodFactory = (foods) =>{
console.log("foodFactory is being called")
return `<div class="container"> 
<h3>${foods.name}</h3>
<div>${foods.ethnicity}</div>
<div>${foods.category}</div>`
}

fetch(url)
  .then(foods => foods.json())
  .then(parsedFoods => {
    console.log("before foreach")
    parsedFoods.forEach(foods => {
      printToDOM(foodFactory(foods));
    });
  })
  .then(console.log("done running"))





