// este es el archivo JS


let productoCadena
let stockCadenas
let precioCadena
productoCadena = "Cadenas"
stockCadenas = 10
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
productoArosyAbridores = "Aros y Abridores"
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

//let compra = prompt("Ingrese SI si quiere comprar")

//if(compra == "SI"){

let precioTotal = 0



// funcion flecha , saca el precio total y verifica si corresponde descuento 
precioTotalFuncion = (cantidad, precio) => {

    precioTotal = cantidad * precio;

    if (precioTotal >= 15000) { precioTotal = precioTotal / 1.10; }

}


// funcion ,
function noStock(stock) {

    alert("Actualmente tenemos " + stock + " unidades disponibles de este producto")
}





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


else
    if (productoCompra.toLowerCase() == "2") {
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
        let cantidadProductoArosyAbridores = prompt("Ingrese que cantidad de" + " " + C + " " + "desea comprar")
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



if (precioTotal != 0) {
    alert("El precio total de su compra es: $" + precioTotal)

    let texto = prompt("Desea seguir con la compra");


}




if (texto == "SI") {

    alert("Seguir la compra")

}
else {
    alert("Gracias por su visita")
}

