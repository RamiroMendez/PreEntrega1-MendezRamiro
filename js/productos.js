const productosDesayuno = [
    { id: 1, imagen: "☕", nombre: "Cafe espresso", precio: 150, categoria: "Bebida" },
    { id: 2, imagen: "☕", nombre: "Cafe cortado", precio: 200, categoria: "Bebida" },
    { id: 3, imagen: "☕", nombre: "Cafe americano", precio: 220, categoria: "Bebida" },
    { id: 4, imagen: "☕", nombre: "Cafe late", precio: 220, categoria: "Bebibda" },
    { id: 5, imagen: "☕", nombre: "Capuccino", precio: 250, categoria: "Bebida" },
    { id: 6, imagen: "🧋", nombre: "Te", precio: 100, categoria: "Bebida"},
    { id: 7, imagen: "🧋", nombre: "Jugo de naranja", precio: 100, categoria: "Bebida"},
    { id: 8, imagen: "🥐", nombre: "Medialunas", precio: 100, categoria: "Merienda" },
    { id: 9, imagen: "🥯", nombre: "Donas", precio: 120, categoria: "Merienda" },
    { id: 10, imagen: "🫓", nombre: "Tostado", precio: 150, categoria: "Merienda" }
]


const guardarEnLocalStorageCompras = ()=> {
    if (comprar.length > 0) {
        localStorage.setItem('Comprar', JSON.stringify(comprar))
    }

}

const recuperarComprasDeLocalStorage = ()=> {
    if (localStorage.getItem('Comprar')) {
        return JSON.parse(localStorage.getItem('Comprar'))
    }else {
        return []
    }
}

const comprar = recuperarComprasDeLocalStorage()


const mostrarMensajes = (msg, bgcolor)=> {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}