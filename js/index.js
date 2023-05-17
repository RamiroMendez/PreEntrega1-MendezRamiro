function mostrarBebidas(codigo){
    switch(parseInt(codigo)){
        case 1:
            alert("Cafe espresso")
            break;
        case 2:
            alert("Cafe cortado")
            break;
        case 3:
            alert("Cafe americano")
            break;
        case 4:
            alert("Cafe latte")
            break;
        case 5:
            alert("Cappuccino")
            break;
    }
}

function mostrarMerienda(codigo){
    switch(parseInt(codigo)){
        case 1:
            alert("Medialunas")
            break;
        case 2:
            alert("Donas")
            break;
        case 3:
            alert("Tostado")
            break;
    }
}

function hacerPedido() {
    let respuesta = confirm("Realiza tu pedido")
    if (respuesta) {
        let codigo = prompt("Ingresa el codigo numerico de tu bebida")
            if (codigo) {
                mostrarBebidas(codigo)
            }

    let agrega = confirm("¿Quieres agregar merienda?")
    if (agrega){
        let agrega = prompt("Ingresa el codigo numerico de tu merienda")
            if (codigo){
                mostrarMerienda(codigo)
            }
        }
    } 
}

