// Ações que o carrinho pode fazer
// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ Calcular o total
async function calculateTotal(userCart) {
  console.log("🛒 Total do carrinho é:")

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: ${result}`);
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

export { addItem, calculateTotal, deleteItem, removeItem }