// este es el archivo JS


let productoCadena
let stockCadenas
let precioCadena
productoCadena = "Cadenas"
stockCadenas = 200
precioCadena = 2000

let productoDije
let stockDijes
let precioDijes
productoDije = "dijes"
stockDijes = 180
precioDijes = 3000

let productoAnillo
let stockAnillos
let precioAnillos
productoAnillo = "anillos"
stockAnillos = 290
precioAnillos = 4000

let productoArosyAbridores
let stockArosyAbridores
let precioArosyabridores
productoArosyAbridores = "Aros y Abridores"
stockArosyAbridores = 175
precioArosyabridores = 1000


let precioTotal = 0

// función para saca el precio total y verifica si corresponde descuento 
function precioTotalFuncion(cantidad, precio){

    precioTotal += (cantidad * precio)

    if (precioTotal >= 15000) { precioTotal = precioTotal / 1.10; }

}

// funcion, verifica el stock
function noStock(stock) {

    alert("Actualmente tenemos " + stock + " unidades disponibles de este producto")
}

let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

let productoCompra = prompt("Ingrese el producto que quiere comprar: \n 1 - Cadena\n 2 - Dije\n 3 - Anillo\n 4 - Aros y Abridores")

if (productoCompra.toLowerCase() == "1") {
    let cantidadProductoCadena = prompt("Ingrese que cantidad de" + " " + productoCadena + " " + "desea comprar")
    if (cantidadProductoCadena <= stockCadenas) {

        precioTotalFuncion(cantidadProductoCadena, precioCadena);
    }

    else {
        noStock(stockCadenas);
        }
    }

    else if (productoCompra.toLowerCase() == "2") {
        let cantidadProductoDije = prompt("Ingrese que cantidad de" + " " + productoDije + " " + "desea comprar")
        if (cantidadProductoDije <= stockDijes) {

            precioTotalFuncion(cantidadProductoDije, precioDijes);
        }
        else {

            noStock(stockDijes);
        }
    }

    else if (productoCompra.toLowerCase() == "3") {
        let cantidadProductoAnillo = prompt("Ingrese que cantidad de" + " " + productoAnillo + " " + "desea comprar")
        if (cantidadProductoAnillo <= stockAnillos) {
            
            precioTotalFuncion(cantidadProductoAnillo, precioAnillos);
        }

        else {
            noStock(stockAnillos);
        }
    }

    else if (productoCompra.toLowerCase() == "4") {
        let cantidadProductoArosyAbridores = prompt("Ingrese que cantidad de" + " " + productoArosyAbridores + " " + "desea comprar")
        if (cantidadProductoArosyAbridores <= stockArosyAbridores) {

            //  usamos funcion 
            precioTotalFuncion(cantidadProductoArosyAbridores, precioArosyabridores);
        }
        else {
            noStock(stockArosyAbridores);
        }
    }
    else {
        alert("No tenemos ese producto a la venta")
    }
    
}    

if (precioTotal != 0) {
    alert("El precio total de su compra es: $" + precioTotal)

}

if (texto == "SI") {
    alert("Seguir la compra")
}

else {
    alert("Gracias por su visita")
}