console.log("probando");

console.log(document);

// buscar elementos en la pagina (DOM)

//querySelector busca un elemento de DOM en la pagina
let h1DOM = document.querySelector("h1"); // busca el primer h1
console.log(h1DOM);

// manipulacion de DOM
console.log(h1DOM.innerText); // apunta al texto interno del elemento de DOM

// estas modificaciones vienen por efectos automaticos...

setTimeout(() => {
  h1DOM.innerText = "nuevo valor de DOM";
}, 2000);

setInterval(() => {
  let counterDOM = document.querySelector("h3");
  // counterDOM.innerText = Number(counterDOM.innerText) + 1
  counterDOM.innerText++;
  // document.querySelector("h3").innerText++
}, 1000);

// ... o por efectos de usuarios

let textDOM = document.querySelector("h4");
let buttonDOM = document.querySelector("button");

// addEventListener => metodo que escucha aciones del usuario sobre el elemento

// 1. tipo de evento
// 2. funcion a ejecutar
buttonDOM.addEventListener("dblclick", () => {
  textDOM.innerText = "ya has hecho click! yay :)";
});

let titleDOM = document.querySelector("#title"); // buscamos por id
titleDOM.innerText = "Nuevo titulo";

let paragraphDOM = document.querySelector(".some-text");
paragraphDOM.innerText = "nuevo contenido parrafo";

// querySelectorAll => todos los elementos de ese tipo

let allParagraphDOM = document.querySelectorAll(".some-text");
console.log(allParagraphDOM);
// se guarda una lista de Nodos (NodeList)
// no son Arrays, pero parece Arrays
// podemos hacer acciones y metodos de array?
// funcionan los bucles tradicionales y el sistema de indexación
// IMPORTANTE. no todos los metodos de arrays funcionan sobre estas listas de nodos.

// bucles tradicionales
for (let i = 0; i < allParagraphDOM.length; i++) {
  allParagraphDOM[i].innerText = "modificando con bucle for";
}

// forEach
allParagraphDOM.forEach((elem, index) => {
  elem.innerText = "modificando con forEach";
});

// busquedas anidadas
let cardsDOM = document.querySelectorAll(".card");
console.log(cardsDOM);

cardsDOM.forEach((patata, index) => {
  // busqueda de el h3 DENTRO de cada carta
  // let h3DOM = document.querySelector("h3")
  let h3DOM = patata.querySelector("h3");
  console.log(h3DOM.innerText);
  if (index === 0) {
    h3DOM.innerText = "1. " + h3DOM.innerText;
  } else {
    h3DOM.innerText = "2. " + h3DOM.innerText;
  }
  console.log("despues de modificar", h3DOM.innerText);
});

// querySelector y querySelectorAll nos permites hacer todas las busquedas que necesitemos.

// existen otros más especificos

document.getElementById("title");
document.getElementsByTagName("p");
document.getElementsByClassName("some-text");

// Otros cambios que podemos hacer sobre elementos de DOM

// innerText vs innerHTML

let footerDOM = document.querySelector("#footer");
console.log(footerDOM.innerText); // SOLO el texto interno (string)
console.log(footerDOM.innerHTML);

let nuevoStr = "string desde variable";
footerDOM.innerHTML = `
<ul>
  <li>Patata1</li>
  <li>Patata2</li>
  <li>${nuevoStr}</li>
</ul>
`;

// crear un eliminar elementos de DOM de forma tradicional

let emptyContainerDOM = document.querySelector("#empty-container");

// createElement() => crear un nodo en JS para luego agregarlo al DOM
let newH4DOM = document.createElement("h4"); // solo crea una referencia
newH4DOM.innerText = "Nuevo h4 creado por createElement";
console.log(newH4DOM);

// como añadir el Nodo de DOM a la pagina (documento)

// append añade un Node a Otro
emptyContainerDOM.append(newH4DOM);

// borrar Nodos => remove()

let allLi = document.querySelectorAll("#footer li");

// setTimeout(() => {
//   emptyContainerDOM.remove()
//   allLi[1].remove()
// }, 1000)

let anotherH4DOM = document.createElement("h4");
anotherH4DOM.innerText = "patata";
emptyContainerDOM.append(anotherH4DOM);

// agregar y remover ids y clases

let lastTagDOM = document.querySelector("#final-thoughts");
console.log(lastTagDOM.id);

setTimeout(() => {
  console.log(lastTagDOM.id)
  lastTagDOM.id = "new-id";
}, 2000);

console.log(lastTagDOM.className);
// lastTagDOM.className = "new-class";

// classList nos da varios metodos para modificar correctamente las classes

lastTagDOM.classList.add("new-class") // añade clase
lastTagDOM.classList.remove("best-practice") // remueve clase
console.log( lastTagDOM.classList.contains("after-footer") ) // booleano si incluye o no la clase



// EVENTS

let eventTitleDOM = document.querySelector("#event-title")
let counterDOM = document.querySelector("#counter span")
let buttonAddDOM = document.querySelector("#increment")
let buttonSubsDOM = document.querySelector("#decrement")
let inputDOM = document.querySelector("#name")
let textAddDOM = document.querySelector("#add-btn")
let ulDOM = document.querySelector("#output-list")
let allButtonsDOM = document.querySelectorAll(".last-btn")

// SECCION DE FUNCIONES
function handleMouseEnter() {
  // console.log("mouse sobre el titulo");
  eventTitleDOM.innerText = "Evento Patata";
  // cambiar clase o cambiar id
  // cambiar directamente el stylo del elemento de DOM
  eventTitleDOM.style.color = "blue";
  eventTitleDOM.style.fontSize = "40px";
  lastTagDOM.style.backgroundColor = "green";
}

function handleMouseLeave() {
// console.log("mouse sale del titulo");
eventTitleDOM.innerText = "EVENTS!";
// cambiar clase o cambiar id
// cambiar directamente el stylo del elemento de DOM
eventTitleDOM.style.color = "black";
eventTitleDOM.style.fontSize = "24px";
lastTagDOM.style.backgroundColor = "magenta";
}

function counterMas() {
  counterDOM.innerText++
}

function counterMenos() {
  if (counterDOM.innerText > 0) {
    counterDOM.innerText--
  }
}

function addStrToList() {
  // console.log("intentado añadir a la lista")

  // 1. necesitamos el valor que esta escribiendo el usuario
  console.log(inputDOM.value)
  let strToAdd = inputDOM.value

  // 2. necesitamos crear un elemento de li
  const elementLi = document.createElement("li")

  // 3. necesitamos añadir el texto del campo al li
  elementLi.innerText = strToAdd

  // 4. necesitamos agregar el li a la lista
  ulDOM.append(elementLi)

  inputDOM.value = ""
  inputDOM.placeholder = "nuevo placeholder"

}

function deleteButton(event) {
  console.log("intentando borrar el boton")
  console.log(event.target)
  console.log(event.target.parentNode)
  //.remove()
  // sobre cual elemento aplico el .remove?
  // allButtonsDOM[0].remove()
  // event.target.remove()

  // suponemos que quiero borrar todo el contenedor padre.
  event.target.parentNode.remove()
  // parentNode apunta a la referencia padre de un elemento de DOM.

  // event.target.parentNode.parentNode.remove()

}

// SECCION DE EVENT LISTENERS
eventTitleDOM.addEventListener("mouseenter", handleMouseEnter)
eventTitleDOM.addEventListener("mouseleave", handleMouseLeave)
buttonAddDOM.addEventListener("click", counterMas)
buttonSubsDOM.addEventListener("click", counterMenos )
textAddDOM.addEventListener("click", addStrToList)

inputDOM.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    console.log("evento activo", event.code)
    addStrToList()
  }
})

allButtonsDOM.forEach((eachBtnDOM, index) => {

  eachBtnDOM.addEventListener("click", deleteButton)

})