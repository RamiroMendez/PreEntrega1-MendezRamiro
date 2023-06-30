const tableBody = document.querySelector('tbody')
const inputSearch = document.querySelector('input#inputSearch')
const cart = []

const armarFilaHTML = (prod)=> {
    return `<tr>
                <td class="class-table-number">${prod.id}</td>
                <td class="emoji-image">${prod.imagen}</td>
                <td>${prod.nombre}</td>
                <td>$ ${prod.precio}</td>
                <td><button id="${prod.id}" class="button button-outline button-big-emoji">🫓</button></td>
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
            mostrarMensajes(` ${resultadoProducto.nombre} se guardo en el carrito de compras.`, 'green')
            mostrarCarrito()
        })
    }
}

const mostrarCarrito = () => {
    const carrito = document.querySelector('#carrito')
    carrito.innerHTML = ''
    if (cart.length > 0) {
        cart.forEach((producto) => {
            carrito.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`
        })
    } else {
        carrito.innerHTML = '<p>No hay productos en el carrito</p>'
    }
}

const finalizarCompraButton = document.querySelector('#finalizarCompra');

finalizarCompraButton.addEventListener('click', () => {
  if (cart.length > 0) {
    mostrarMensajes('Compra finalizada. Gracias por su compra!', 'green');
    cart.length = 0;
    guardarEnLocalStorageCompras();
    mostrarCarrito();
  } else {
    mostrarMensajes('No hay productos en el carrito', 'red');
  }
});

localStorage.setItem('purchaseCompleted', 'true');

if (localStorage.getItem('purchaseCompleted') === 'true') {
    mostrarMensajes('Su compra se realizó con éxito. Ya puede retirar.', 'green');
    localStorage.removeItem('purchaseCompleted');
}

cargarProductos(productosDesayuno)
mostrarCarrito()
