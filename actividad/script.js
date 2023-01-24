// ITERATION 4: Get all the veggie items. Console log the text of each one
// think about loops, innerText vs innerHTML

// ... your code here
let allVeggiesDOM = document.querySelectorAll(".veggies li")
console.log(allVeggiesDOM)

allVeggiesDOM.forEach((eachVeggieDOM) => {
  console.log(eachVeggieDOM.innerText)
  // eachVeggieDOM.innerText = "patata"
})

// Broccoli 
// Potato 
// Avocado 
// Spinach
// Tomato
// ----------------------------------------------

// ITERATION 5: Add a class 'best-fruit' to all the fruits with an Odd index. 1 & 3
// think about loops, ways to add classes to an element

// ... your code here
let allFruitsDOM = document.querySelectorAll(".fruits li")

allFruitsDOM.forEach((eachFruitDOM, index) => {
  if (index % 2 === 1) {
    eachFruitDOM.classList.add("best-fruit")
  }
})


// => <li class="fruit-item best-fruit">Grapes</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// ITERATION 6: Remove class 'veggie-item' from all veggies that start with the letter "A" or "T".

// ... your code here
allVeggiesDOM.forEach((eachVeggieDOM) => {
  if (eachVeggieDOM.innerText[0] === "A" || eachVeggieDOM.innerText[0] === "T") {
    eachVeggieDOM.classList.remove("veggie-item")
  }
})


// => ... <li>Avocado</li>
// => ... <li>Tomato</li>