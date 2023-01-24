console.log("probando")


console.log(document)


// buscar elementos en la pagina (DOM)

//querySelector busca un elemento de DOM en la pagina
let h1DOM = document.querySelector("h1") // busca el primer h1
console.log(h1DOM)

// manipulacion de DOM
console.log(h1DOM.innerText) // apunta al texto interno del elemento de DOM


// estas modificaciones vienen por efectos automaticos...

setTimeout( () => {

  h1DOM.innerText = "nuevo valor de DOM"

}, 2000 )

setInterval( () => {
  
  let counterDOM = document.querySelector("h3")
  // counterDOM.innerText = Number(counterDOM.innerText) + 1
  counterDOM.innerText++
  // document.querySelector("h3").innerText++

}, 1000 )

// ... o por efectos de usuarios

let textDOM = document.querySelector("h4")
let buttonDOM = document.querySelector("button")

// addEventListener => metodo que escucha aciones del usuario sobre el elemento

// 1. tipo de evento
// 2. funcion a ejecutar
buttonDOM.addEventListener("dblclick", () => {
  textDOM.innerText = "ya has hecho click! yay :)"
})


let titleDOM = document.querySelector("#title") // buscamos por id
titleDOM.innerText = "Nuevo titulo"

let paragraphDOM = document.querySelector(".some-text")
paragraphDOM.innerText = "nuevo contenido parrafo"

// querySelectorAll => todos los elementos de ese tipo

let allParagraphDOM = document.querySelectorAll(".some-text")
console.log(allParagraphDOM)
// se guarda una lista de Nodos (NodeList)
// no son Arrays, pero parece Arrays
// podemos hacer acciones y metodos de array?
// funcionan los bucles tradicionales y el sistema de indexación
// IMPORTANTE. no todos los metodos de arrays funcionan sobre estas listas de nodos.


for(let i = 0; i < allParagraphDOM.length; i++) {
  allParagraphDOM[i].innerText = "modificando con bucle for"
}

// forEach

allParagraphDOM.forEach((elem, index) => {
  elem.innerText = "modificando con forEach"
})