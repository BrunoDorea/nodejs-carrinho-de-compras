import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Bem vindo ao seu carrinho da Shopee!")

// Criando um item
const item1 = await createItem("Keyboard", 169.29, 1)
const item2 = await createItem("Mouse", 69.29, 2)
const item3 = await createItem("Mouse", 169.29, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWishList, item3)

await cartService.calculateTotal(myCart)