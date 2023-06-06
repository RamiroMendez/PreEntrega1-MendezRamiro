class Compra {
    constructor(tuCarritoDeCompras) {
        this.carrito = tuCarritoDeCompras
    }
    obtenerPrecio() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        }
       
    }
}