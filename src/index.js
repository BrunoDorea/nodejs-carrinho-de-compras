import createItem from "./services/item.js"

const cart = []

console.log("Bem vindo ao seu carrinho da Shopee!")

// Criando um item
const item1 = await createItem("Keyboard", 169.29, 1)
const item2 = await createItem("Mouse", 69.29, 2)

console.log(item2.subtotal())