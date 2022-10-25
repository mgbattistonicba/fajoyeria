// este es el archivo JS


function producto(nombre, precio, stock, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.img = img
    this.restarstock = function (cantidad) {
    this.stock -= cantidad
    }
}

let productoCadena = new producto("cadena", 2000, 200, "../img/cadenas/")
let productoDije = new producto("dije", 3000, 180, "../img/dijes/")
let productoAnillo = new producto("anillo", 4000, 290, "../img/anillos/")
let productoAros = new producto("aros", 1000, 175, "../img/aros/")


let listaProductos = [productoCadena, productoDije, productoAnillo, productoAros]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)


/* for(const propiedad in productoCadena){

    console.log(productoCadena[propiedad])
}

for(const propiedad1 in productoDije){

    console.log(productoDije[propiedad1])
}

for(const propiedad2 in productoAnillo){

    console.log(productoAnillo[propiedad2])
}

for(const propiedad3 in productoAros){

    console.log(productoAros[propiedad3])
}
 */

function render(listaProductos) {

    for (const prod of listaProductos) {

        catalogo.innerHTML = ""

        let precioTotal = 0

        let catalogo = document.getElementsByClassName("row")

        let card = document.createElement("listadoProducto")

        card.className = "listadoProducto"

        card.innerHTML = `<button href="${prod.img}">${prod.nombre}</button> <p>$${prod.precio}</p>`

        catalogo.append(card)
    }
}


//acumula a medida que vas haciendo el click en el carrito
let acumulador = 0

function contador() {
    acumulador += 1
    console.log(acumulador)
}

let boton = document.getElementById("prodAnillo")

boton.addEventListener("click", contador)


localStorage.setItem("Hola", "Belgrano")


let precioTotal = 0

//catalogo[0].className = "rowCategoria"

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

    let productoCompra = prompt("Ingrese el producto que quiere comprar: \n 1 Cadena\n 2 Dije\n 3 Anillo\n 4 Aros ")

//    \n 1 - Cadena\n 2 - Dije\n 3 - Anillo\n 4 - Aros

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
        let cantidadProductoAros = prompt("Ingrese que cantidad de" + " " + productoAros.nombre + " " + "desea comprar")
        noStock (cantidadProductoAros, productoAros.stock, productoAros.precio)
        productoAros.restarstock(cantidadProductoAros)
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
