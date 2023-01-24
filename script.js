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