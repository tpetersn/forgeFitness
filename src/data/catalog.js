const catalog = [
  // MEN CATALOG
  {
    id: 'M001',
    name: 'Athletic Tank',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 18.99,
    colors: ['Black', 'Blue'],
    tags: ['sale'],
    image: '/src/assets/mens/tank.png'
  },
  {
    id: 'M002',
    name: 'Athletic T-Shirt',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 18.99,
    colors: ['Black', 'Blue'],
    tags: ['sale'],
    image: '/src/assets/mens/t-shirt.png'
  },

  //WOMEN CATALOG
  {
    id: 'W001',
    name: 'Womens Sports Bra',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    price: 24.99,
    colors: ['White'],
    tags: [],
    image: '/src/assets/womens/bra.png'
  },

  //ACCESSORIES CATALOG
  {
    id: 'A001',
    name: '1 Gallon Water Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Clear'],
    tags: ['new'],
    image: '/src/assets/accessories/bottle.png'
  }
]

export default catalog
