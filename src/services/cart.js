// Ações que o carrinho pode fazer
// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ Calcular o total
async function calculateTotal(userCart) {
  console.log("🛒 Total do carrinho é:")

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`\n🎁 Total: R$ ${result}`);
}

// ✅ Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if(index !== -1) {
    userCart.splice(index, 1)
  }
}

// Remover item do carrinho
async function removeItem(userCart, index) {}

// ✅ Exibindo carrinho
async function displayCart(userCart) {
  console.log("\n📋 Itens do carrinho:")
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} un | Subtotal = R$ ${item.subtotal()}`)
  })
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }