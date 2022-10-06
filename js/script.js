// este es el archivo JS


function producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarstock = function(cantidad){
        this.stock -= cantidad
    }
}

let productoCadena = new producto("cadena", 2000, 200)
let productoDije = new producto("dije", 3000, 180)
let productoAnillo = new producto("anillo", 4000, 290)
let productoArosyAbridores = new producto("aros y abridores", 1000, 175)


for(const propiedad in productoCadena){

    console.log(productoCadena[propiedad])
}

for(const propiedad1 in productoDije){

    console.log(productoDije[propiedad1])
}

for(const propiedad2 in productoAnillo){

    console.log(productoAnillo[propiedad2])
}

for(const propiedad3 in productoArosyAbridores){

    console.log(productoArosyAbridores[propiedad3])
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
    productoCadena.restarstock(cantidadProductoCadena)
    }

    else if (productoCompra.toLowerCase() == "2") {
        let cantidadProductoDije = prompt("Ingrese que cantidad de" + " " + productoDije.nombre + " " + "desea comprar")
        noStock(cantidadProductoDije, productoDije.stock, productoDije.precio)
        productoDije.restarstock(cantidadProductoDije)
    }

    else if (productoCompra.toLowerCase() == "3") {
        let cantidadProductoAnillo = prompt("Ingrese que cantidad de" + " " + productoAnillo.nombre + " " + "desea comprar")
        noStock(cantidadProductoAnillo, productoAnillo.stock, productoAnillo.precio)
        productoAnillo.restarstock(cantidadProductoAnillo)
    }

    else if (productoCompra.toLowerCase() == "4") {
        let cantidadProductoArosyAbridores = prompt("Ingrese que cantidad de" + " " + productoArosyAbridores.nombre + " " + "desea comprar")
        noStock (cantidadProductoArosyAbridores, productoArosyAbridores.stock, productoArosyAbridores.precio)
        productoArosyAbridores.restarstock(cantidadProductoArosyAbridores)
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


