console.log('SCRIPT.JS connected');

// ****************************** part 1 ******************************

const addTask = () => {
  console.log("funcion addTask")

  // 1. target the two input DOM elements here using querySelector
  let input1DOM = document.querySelector("#task-input")
  let input2DOM = document.querySelector("#owner-input")

  // 2. target the ul DOM element (id task-list) here using querySelector
  let ulDOM = document.querySelector("#tasks-list")

  // 3. create a new li DOMelement here (remember to method to create a new DOM element)
  let liDOM = document.createElement("li")
  
  // 4. add some inner text to the li DOM element, with the information of both input values (something like "value1 :  value2")
  liDOM.innerText = `${input2DOM.value} : ${input1DOM.value}`
  
  // 5. append the li DOM element to the ul DOM element. Remember there is a specific method to add a DOM element to another.
  ulDOM.append(liDOM)

  // 6. (Optional) clear the input DOM elements here (inner text should be emptied)
  input1DOM.value = "";
  input2DOM.value = "";

  // after you are done, test in the browser by adding two values to the input and clicking the button "Add"
  // example: Study DOM : Bob

}

// ****************************** part 2 ******************************

const randomPoke = (containerParam) => {
  console.log("working inside container!")
  // This line gives you a random pokemon image source inside randomPokemonSrc
  let randomPokemonSrc = `https://tinyurl.com/ironhack-pokemons/${Math.floor(Math.random()*150)+1}.svg`
  // This line gives you a random color in hex inside randomColor
  let randomColor = '#' + Math.random().toString(16).slice(-6);


  // 3. Target the img element inside each container here
  // IMPORTANT. remember to work on the containerParam which refers to each container, not the whole document
  let imageDOM = containerParam.querySelector("img")

  // 4. Change the src of the img here
  imageDOM.src = randomPokemonSrc

  // 5. Change the background color of the container here
  containerParam.style.backgroundColor = randomColor

  // after you are done, test in your browser by clicking the button "Update the Dream Team"

}

const selectContainers = () => {

  // This is a NodeList of all 3 container div elements
  let allContainersDOM = document.querySelectorAll(".container");

  // 1. Run a forEach loop over the containerDOM NodeList here
  allContainersDOM.forEach((eachContainerDOM) => {
    randomPoke(eachContainerDOM)
  })

  // 2. Inside the forEach, run the randomPoke function and pass each container as an argument
  
  // ... continue with step 3 in randomPoke function

}

// ****************************** AddEventListeners ******************************

window.addEventListener("load", () => {
  
  // addEventListener for Part 1
  let addTaskButton = document.querySelector("#btn-add")
  addTaskButton.addEventListener("click", addTask) 
  
  // addEventListener for Part 2
  let updatePokemonsButton = document.querySelector("#btn-update")
  updatePokemonsButton.addEventListener("click", selectContainers)

})