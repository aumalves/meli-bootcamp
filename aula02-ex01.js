function calcularPreco (product, price) {
    let sendPrice = null
    if (price <= 2000) {
        sendPrice = 300
    } if (price >= 2001 && price <= 4000) {
        sendPrice = 450
    } if (price > 4000) {
        sendPrice = 700
    }
    return(`O produto ${product} custa ${price}. Seu custo de envio é ${sendPrice}. Portanto, o preço final é ${price + sendPrice}`)
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));