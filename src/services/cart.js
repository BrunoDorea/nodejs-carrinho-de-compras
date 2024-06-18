// Ações que o carrinho pode fazer
// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// Calcular o total
async function calculateTotal(userCart) {
  console.log("🛒 Total do carrinho é:")

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: ${result}`);
}

// Deletar item do carrinho
async function deleteItem(useCart, name) {}

// Remover item do carrinho
async function removeItem(useCart, index) {}

export { addItem, calculateTotal, deleteItem, removeItem }