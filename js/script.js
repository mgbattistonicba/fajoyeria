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
/*alert("Bienvenido a su joyeria de confianza")

let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el producto que quiere comprar: \n 1 Cadena\n 2 Dije\n 3 Anillo\n 4 Aros ")

//    \n 1 - Cadena\n 2 - Dije\n 3 - Anillo\n 4 - Aros*/

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

/*if (precioTotal != 0) {
    alert("El precio total de su compra es: $" + precioTotal)
}

else {
    alert("Gracias por su visita")
}*/



let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
function renderizarProductos() {
    producto.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();