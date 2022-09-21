// este es el archivo JS
/* 
3 palabras claves para crear variables
var -- no se usa mas
let -- 
const -- "constante" */

let productoCadena
let stockCadenas
let precioCadena
productoCadena = "Cadenas"
stockCadenas = 150
precioCadena = 2980

let productoDije
let stockDijes
let precioDijes
productoDije = "dijes"
stockDijes = 180
precioDijes = 3250

let productoAnillo
let stockAnillos
let precioAnillos
productoAnillo = "anillos"
stockAnillos = 290
precioAnillos = 4320

let productoArosyAbridores
let stockArosyAbridores
let precioArosyabridores
productoArosyAbridores ="Aros y Abridores"
stockArosyAbridores = 175
precioArosyabridores = 2870

//let resultado = precioDijes + precioAnillos

//console.log("Precio total de la compra" ,resultado)

//prompt - palabra reservada donde ponemos mensaje

//let numeroIngresado = prompt("Ingrese el producto")
//console.log(numeroIngresado)

// alert - muestra informacion al usuario
// alert("Bienvenido a nuestra web")

//mostrar los productos - compra?
// cantidad - precio total de la compra

alert("Acepte si quiere comprar" + " " + productoCadena)

let cantidadProductoCadena = prompt("Ingrese que cantidad de"+ " " + productoCadena + " "+ "desea comprar")

alert("Acepte si quiere comprar" + " " + productoDije)

let cantidadProductoDije = prompt("Ingrese que cantidad de" + " " + productoDije + " " + "desea comprar")

alert("Acepte si quiere comprar" + " " + productoAnillo)

let cantidadProductoAnillo = prompt("Ingrese que cantidad de" + " " + productoAnillo + " " + "desea comprar")

alert("Acepte si quiere comprar" + " " + productoArosyAbridores)

let cantidadProductoArosyAbridores = prompt("Ingrese que cantidad de" + " " + productoArosyAbridores + " " + "desea comprar")

let precioTotalCadena = cantidadProductoCadena * precioCadena

let precioTotalDijes = cantidadProductoDije * precioDijes

let precioTotalAnillos = cantidadProductoAnillo * precioAnillos

let precioTotalArosyAbridores = cantidadProductoArosyAbridores * precioArosyabridores

let precioTotal = precioTotalCadena + precioTotalDijes + precioTotalAnillos + precioTotalArosyAbridores

alert("El precio total de su compra es:" + precioTotal)

console.log(precioTotal)




