const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P"
]

module.exports = () => {
  const productsInOrder = {}

  for (let i = 0; i < products.length; i++) {
    const item = products[i]
    const [color, size] = item.split('-')

    if (!productsInOrder[color]) {
      productsInOrder[color] = {}
    }

    if (!productsInOrder[color][size]) {
      productsInOrder[color][size] = 1
    } else {
      productsInOrder[color][size]++
    }
  }
   return productsInOrder
}