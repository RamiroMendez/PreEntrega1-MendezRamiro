const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')
const cart = []

const armarFilaHTML = (prod)=> {
    return `<tr>
                <td class="class-table-number">${prod.id}</td>
                <td class="emoji-image">${prod.imagen}</td>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio}</td>
                <td><button id="${prod.id}" class="button button-outline button-big-emoji">✅</button></td>
            </tr>`
}

const filtrarProductos = ()=> {
    let arrayResultado = productosDesayuno.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}

inputSearch.addEventListener('search', filtrarProductos)

const cargarProductos = (array)=> {
    tableBody.innerHTML = ''
    array.forEach((producto) => {
        tableBody.innerHTML += armarFilaHTML(producto)
    })
    activarClickEnBotonesComprar()
}

const activarClickEnBotonesComprar = ()=> {
    const botonesComprar = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    for (let botonComprar of botonesComprar) {
        botonComprar.addEventListener('click', ()=> {
            let resultadoProducto = productosDesayuno.find((prod)=> prod.id === parseInt(botonComprar.id))
            cart.push(resultadoProducto)
            guardarEnLocalStorageCompras()
            mostrarMensajes(` ${resultadoProducto.nombre} se guardo en el carrito de compras. Cuando termines de seleccionar todos tu productos deseados da click en finalizar compra`, 'green')
            mostrarCarrito()
        })
    }
}

const mostrarCarrito = () => {
    const carrito = document.querySelector('#carrito')
    carrito.innerHTML = ''
    let total = sumarProductos();
    if (cart.length > 0) {
      cart.forEach((producto, index) => {
        carrito.innerHTML += `<p>${producto.nombre} - $${producto.precio} <button id="remove-${index}" class="button button-outline button-small-emoji">❌</button></p>`
      })
      carrito.innerHTML += `<p>Total: $${total}</p>`;
    } else {
      carrito.innerHTML = '<p>No hay productos en el carrito</p>'
    }
    activarClickEnBotonesEliminar()
}
  
const activarClickEnBotonesEliminar = ()=> {
    const botonesEliminar = document.querySelectorAll('button.button.button-outline.button-small-emoji')
    for (let botonEliminar of botonesEliminar) {
      botonEliminar.addEventListener('click', ()=> {
        let index = parseInt(botonEliminar.id.split('-')[1])
        cart.splice(index, 1)
        guardarEnLocalStorageCompras()
        mostrarMensajes(`Producto eliminado del carrito.`, 'green')
        mostrarCarrito()
        })
    }
}

const finalizarCompraButton = document.querySelector('#finalizarCompra');

finalizarCompraButton.addEventListener('click', () => {
  if (cart.length > 0) {
    let total = sumarProductos()
    let productosComprados = "Productos comprados: ";
    for (let producto of cart) {
      productosComprados += `${producto.nombre} - $${producto.precio}, `;
    }
    productosComprados = productosComprados.slice(0, -2)
    cart.length = 0;
    guardarEnLocalStorageCompras()
    mostrarCarrito()
    mostrarOpcionesDePago();
    mostrarMensajes(`Compra finalizada. ${productosComprados}. Total: $${total}. Seleccione su método de pago.`, 'red')
  } else {
    mostrarMensajes('No hay productos en el carrito', 'red')
  }
})

const mostrarOpcionesDePago = () => {
  const opcionesDePago = ['Tarjeta de crédito', 'Tarjeta de débito', 'Mercado Pago'];
  let opcionesHTML = '';
  for (let opcion of opcionesDePago) {
    opcionesHTML += `<option value="${opcion}">${opcion}</option>`;
  }
  
  const opcionesDePagoHTML = `
    <label for="opcionesDePago">Seleccione una opción de pago:</label>
    <select id="opcionesDePago">
      ${opcionesHTML}
    </select>
  `;
  const opcionesDePagoDiv = document.createElement('div')
  opcionesDePagoDiv.innerHTML = opcionesDePagoHTML;
  const carrito = document.querySelector('#carrito')
  carrito.appendChild(opcionesDePagoDiv);

  const opcionesDePagoSelect = document.querySelector('#opcionesDePago')
  opcionesDePagoSelect.addEventListener('change', () => {
    const direccionEnvioForm = `
      <form id="direccionEnvioForm">
        <label for="direccionEnvio">Ingrese la dirección de envío:</label>
        <input type="text" id="direccionEnvio" name="direccionEnvio">
        <button type="button" id="enviarDireccionEnvio">Enviar</button>
      </form>
    `;
    const direccionEnvioDiv = document.createElement('div')
    direccionEnvioDiv.innerHTML = direccionEnvioForm;
    carrito.appendChild(direccionEnvioDiv);

const enviarDireccionEnvioButton = document.querySelector('#enviarDireccionEnvio')
  enviarDireccionEnvioButton.addEventListener('click', () => {
    const direccionEnvioInput = document.querySelector('#direccionEnvio')
    const direccionEnvio = direccionEnvioInput.value;
    mostrarMensajes(`La dirección de envío es: ${direccionEnvio} !! Si todo es correcta da click en ok`, 'green')
    direccionEnvioDiv.remove()
    const mensajeCompraDiv = document.createElement('div')
    mensajeCompraDiv.innerHTML = 'Muchas gracias por tu compra. Tu pedido llegará a la brevedad. <button id="okButton" class="button button-outline button-small-emoji">OK</button>';
      carrito.appendChild(mensajeCompraDiv);
      const okButton = document.querySelector('#okButton')
      okButton.addEventListener('click', () => {
        location.reload()
      })
    })
    mostrarMensajes('Por favor, escriba su dirección para que enviemos su pedido. Y luego de click en enviar', 'blue')
  })
}


localStorage.setItem('comprafinalizada', 'true')


if (localStorage.getItem('comprafinalizada') === 'true') {
    mostrarMensajes();
    localStorage.removeItem('comprafinalizada')
}


const sumarProductos = () => {
    let total = 0;
    for (let producto of cart) {
      total += producto.precio;
    }
    return total;
}


cargarProductos(productosDesayuno)
mostrarCarrito()

