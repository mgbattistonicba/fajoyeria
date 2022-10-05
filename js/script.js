// este es el archivo JS

let productoCadena = {
    nombre: "cadenas",
    stock: 200,
    precio: 2000
}

let productoDije = {
    nombre: "dijes",
    stock: 180,
    precio: 3000
}

let productoAnillo = {
    nombre: "anillos",
    stock: 290,
    precio: 4000
}

let productoArosyAbridores = {
    nombre: "aros y abridores",
    stock: 175,
    precio: 1000
}


let precioTotal = 0

// función para saca el precio total y verifica si corresponde descuento 
function precioTotalFuncion(cantidad, precio){

    precioTotal += (cantidad * precio)

    if (precioTotal >= 15000) { precioTotal = precioTotal / 1.10; }

}

// funcion, verifica el stock
function noStock(cantidad, _stock, precio) {

    if(cantidad, precio){
        precioTotalFuncion(cantidad, precio)
    }

    //alert("Actualmente tenemos " + stock + " unidades disponibles de este producto")
}

//Mensaje de bienvenida
alert("Bienvenido a su joyeria de confianza")

let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el producto que quiere comprar: \n 1 - Cadena\n 2 - Dije\n 3 - Anillo\n 4 - Aros y Abridores")

if (productoCompra.toLowerCase() == "1") {
    let cantidadProductoCadena = prompt("Ingrese que cantidad de" + " " + productoCadena.nombre + " " + "desea comprar")
    noStock(cantidadProductoCadena, productoCadena.stock, productoCadena.precio)
    }

    else if (productoCompra.toLowerCase() == "2") {
        let cantidadProductoDije = prompt("Ingrese que cantidad de" + " " + productoDije.nombre + " " + "desea comprar")
        noStock(cantidadProductoDije, productoDije.stock, productoDije.precio)
    }

    else if (productoCompra.toLowerCase() == "3") {
        let cantidadProductoAnillo = prompt("Ingrese que cantidad de" + " " + productoAnillo.nombre + " " + "desea comprar")
        noStock(cantidadProductoAnillo, productoAnillo.stock, productoAnillo.precio)
    }

    else if (productoCompra.toLowerCase() == "4") {
        let cantidadProductoArosyAbridores = prompt("Ingrese que cantidad de" + " " + productoArosyAbridores.nombre + " " + "desea comprar")
        noStock (cantidadProductoArosyAbridores, productoArosyAbridores.stock, productoArosyAbridores.precio)

    }
    else {
        alert("No tenemos ese producto a la venta")
    }
    
}    

if (precioTotal != 0) {
    alert("El precio total de su compra es: $" + precioTotal)
}

else {
    alert("Gracias por su visita")
}


