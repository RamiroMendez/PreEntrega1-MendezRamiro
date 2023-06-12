const carrito = []
const productos = [{ codigo: 1, tipo: 'Cafe espresso', precio: 150},
                 { codigo: 2, tipo: 'Cafe cortado', precio: 220},
                 { codigo: 3, tipo: 'Cafe americano', precio: 200},
                 { codigo: 4, tipo: 'Cafe late', precio: 220},
                 { codigo: 5, tipo: 'Capuccino', precio: 250},
                 { codigo: 6, tipo: 'Medialunas', precio: 100},
                 { codigo: 7, tipo: 'Donas', precio: 120},                
                 { codigo: 8, tipo: 'Tostado', precio: 150}]

function buscarProductos(codigo) {
    let resultado = productos.find((producto)=> producto.codigo === parseInt(codigo) )
    return resultado 
}

function finalizarCompra() {
    const totalCompras = new Compra(carrito)
    alert('El costo total de tu compra es $ ' + totalCompras.obtenerPrecio() )
}

function hacerPedido() {
    let codigo = prompt("Ingresa el código numerico del producto que deseas comprar")
    let productoElegido = buscarProductos(codigo)
    if (productoElegido !== undefined) {
        carrito.push(productoElegido)
        alert(productoElegido.tipo + ' se agregó al carrito.')
        let respuesta = confirm("¿Deseas agregar otro producto?")
        if (respuesta === true) {
            hacerPedido()
        } else {
            finalizarCompra()
        }
    } else {
        alert('Error en el código ingresado. Refresca, para comenzar de nuevo.')
    }
    
}
hacerPedido()
