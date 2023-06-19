const productosDesayuno = [
    { id: 1, imagen: "☕", nombre: "Cafe espresso", precio: 150, categoria: "Bebida" },
    { id: 2, imagen: "☕", nombre: "Cafe cortado", precio: 200, categoria: "Bebida" },
    { id: 3, imagen: "☕", nombre: "Cafe americano", precio: 220, categoria: "Bebida" },
    { id: 4, imagen: "☕", nombre: "Cafe late", precio: 220, categoria: "Bebibda" },
    { id: 5, imagen: "☕", nombre: "Capuccino", precio: 250, categoria: "Bebida" },
    { id: 6, imagen: "🥐", nombre: "Medialunas", precio: 100, categoria: "Merienda" },
    { id: 7, imagen: "🥯", nombre: "Donas", precio: 120, categoria: "Merienda" },
    { id: 8, imagen: "🫓", nombre: "Tostado", precio: 150, categoria: "Merienda" }
]

const guardarEnLocalStorage = ()=> {
    if (favoritos.length > 0) {
        localStorage.setItem('Favoritos', JSON.stringify(favoritos))
    }
}

const recuperarFavsDeLocalStorage = ()=> {
    if (localStorage.getItem('Favoritos')) {
        return JSON.parse(localStorage.getItem('Favoritos'))
    } else {
        return []
    }
}

const favoritos = recuperarFavsDeLocalStorage()

const mostrarMensajes = (msg, bgcolor)=> {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}