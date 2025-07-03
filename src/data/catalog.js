const catalog = [
  // MEN CATALOG **********************************************

  // T-Shirts ***
  {
    id: 'MT101',
    name: 'Classic T-Shirt',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 22.99,
    colors: ['White', 'Black', 'Blue', 'Brown'],
    tags: ['top', 't-shirt','new'],
    image: '/src/assets/mens/classic-crew.png'
  },
  {
    id: 'MT102',
    name: 'Performance Tee',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 29.99,
    colors: ['Gray', 'Blue'],
    tags: ['top', 't-shirt', 'popular'],
    image: '/src/assets/mens/performance.png'
  },
  {
    id: 'MT103',
    name: 'Street T-Shirt',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 34.99,
    colors: ['Red', 'Gray', 'White', 'Black'],
    tags: ['top', 't-shirt', 'new'],
    image: '/src/assets/mens/oversized.png'
  },
  {
    id: 'MT104',
    name: 'Slim Fit Training Tee',
    category: 'men',
    sizes: ['S', 'M', 'L'],
    price: 31.99,
    colors: ['Green', 'Gray'],
    tags: ['top', 't-shirt', 'popular'],
    image: '/src/assets/mens/slim-fit.png'
  },
  {
    id: 'MT105',
    name: 'Moisture-Wicking Tee',
    category: 'men',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 26.99,
    colors: ['Gray', 'Blue', 'Red', 'Black', 'White'],
    tags: ['top', 't-shirt'],
    image: '/src/assets/mens/moisture-wicking.png'
  },
  
  // Long Sleeve ***
  {
    id: 'MT201',
    name: 'Athletic Long Sleeve',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 34.99,
    colors: ['Gray', 'Black'],
    tags: ['top', 'long-sleeve'],
    image: '/src/assets/mens/athletic.png'
  },
  {
    id: 'MT202',
    name: 'Training Shirt',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 39.99,
    colors: ['Green', 'Red'],
    tags: ['top', 'long-sleeve', 'sale'],
    image: '/src/assets/mens/thermal.png'
  },
  {
  id: 'MT203',
  name: 'Essential Base Layer',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 31.99,
  colors: ['Blue', 'Black'],
  tags: ['top', 'long-sleeve', 'new'],
  image: '/src/assets/mens/longsleeve/base-layer.png'
},
{
  id: 'MT204',
  name: 'Long Sleeve Pullover',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],
  price: 44.99,
  colors: ['Red', 'Blue', 'Brown'],
  tags: ['top', 'long-sleeve', 'popular'],
  image: '/src/assets/mens/longsleeve/quarter-zip.png'
},
{
  id: 'MT205',
  name: 'Breathable Long Sleeve',
  category: 'men',
  sizes: ['S', 'M', 'L'],
  price: 36.50,
  colors: ['White', 'Gray', 'Black'],
  tags: ['top', 'long-sleeve'],
  image: '/src/assets/mens/longsleeve/breathable-mesh.png'
},

  // Muscle Shirt ***
  {
    id: 'MT301',
    name: 'DryFit Muscle Tank',
    category: 'men',
    sizes: ['S', 'M', 'L'],
    price: 19.99,
    colors: ['Black', 'Gray'],
    tags: ['top', 'muscle-shirt', 'featured'],
    image: '/src/assets/mens/muscle/muscle-dryfit.png'
  },
  {
    id: 'MT302',
    name: 'Workout Tank',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 24.99,
    colors: ['White', 'Blue'],
    tags: ['top', 'muscle-shirt'],
    image: '/src/assets/mens/muscle/tank.png'
  },
  {
  id: 'MT303',
  name: 'Classic Gym Tank',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 21.99,
  colors: ['Red', 'Black'],
  tags: ['top', 'muscle-shirt'],
  image: '/src/assets/mens/muscle/classic-gym.png'
},
{
  id: 'MT304',
  name: 'Performance Tank',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 26.50,
  colors: ['Gray', 'White'],
  tags: ['top', 'muscle-shirt', 'new'],
  image: '/src/assets/mens/muscle/racerback.png'
},
{
  id: 'MT305',
  name: 'Tapered Tank Top',
  category: 'men',
  sizes: ['S', 'M', 'L'],
  price: 22.49,
  colors: ['Black', 'Green'],
  tags: ['top', 'muscle-shirt', 'sale'],
  image: '/src/assets/mens/muscle/tapered-tank.png'
},

  // Sweaters ***
  {
    id: 'MT501',
    name: 'Pullover Hoodie',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 49.99,
    colors: ['Black', 'Gray'],
    tags: ['top', 'sweater', 'popular'],
    image: '/src/assets/mens/sweaters/pullover.png'
  },
  {
    id: 'MT502',
    name: 'Athletic Sweater',
    category: 'men',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 54.99,
    colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
    tags: ['top', 'sweater', ],
    image: '/src/assets/mens/sweaters/athletic-hoodie.png'
  },
    {
    id: 'MT503',
    name: 'Baggy Pullover Hoodie',
    category: 'men',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 54.99,
    colors: ['Blue', 'Red', 'Gray', 'Black', 'White'],
    tags: ['top', 'sweater', ],
    image: '/src/assets/mens/sweaters/zipup.png'
  },
  {
    id: 'MT504',
    name: 'Casual Sweater',
    category: 'men',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 54.99,
    colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
    tags: ['top', 'sweater', ],
    image: '/src/assets/mens/sweaters/casual-hoodie.png'
  },
  {
    id: 'MT505',
    name: 'Vintage Hoodie',
    category: 'men',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 54.99,
    colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
    tags: ['top', 'sweater', 'new'],
    image: '/src/assets/mens/sweaters/vintage-hoodie.png'
  },

  //Mens bottoms *******
  //shorts *****
  {
    id: 'MB101',
    name: 'Athletic Shorts',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Gray', 'Blue', 'White', 'Red'],
    tags: ['bottom', 'shorts', 'popular'],
    image: '/src/assets/mens/shorts/athletic-shorts.png'
  },
  {
    id: 'MB102',
    name: 'Casual Shorts',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Gray', 'Blue', 'White'],
    tags: ['bottom', 'shorts', 'new'],
    image: '/src/assets/mens/shorts/casual-shorts.png'
  },

  {
    id: 'MB103',
    name: 'Denim Shorts',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue'],
    tags: ['bottom', 'shorts'],
    image: '/src/assets/mens/shorts/denim-shorts.png'
  },
  {
    id: 'MB104',
    name: 'Workout Lining Shorts',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Gray', 'Black', 'White', 'Red', 'Green', 'Orange'],
    tags: ['bottom', 'shorts', 'new'],
    image: '/src/assets/mens/shorts/lining-shorts.png'
  },
  {
    id: 'MB105',
    name: 'Stretch Shorts',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
    tags: ['bottom', 'shorts'],
    image: '/src/assets/mens/shorts/stretch-shorts.png'
  },


  //pants *****
  {
    id: 'MB201',
    name: 'Athletic Pants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Gray'],
    tags: ['bottom', 'athletic-pants', 'new'],
    image: '/src/assets/mens/pants/athletic-pants.png'
  },
  {
    id: 'MB202',
    name: 'Jogger Pants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'denim-pants'],
    image: '/src/assets/mens/pants/jogger-pants.png'
  },
  {
    id: 'MB203',
    name: 'Stretch Pants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
    tags: ['bottom', 'stretch-pants'],
    image: '/src/assets/mens/pants/stretch-pants.png'
  },
  {
    id: 'MB204',
    name: 'Workout Pants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
    tags: ['bottom', 'workout-pants'],
    image: '/src/assets/mens/pants/workout-pants.png'
  },
  {
    id: 'MB205',
    name: 'Windbreaker Pants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'White', 'Red', 'Green'],
    tags: ['bottom', 'denim-pants'],
    image: '/src/assets/mens/pants/windbreaker-pants.png'
  },

  //sweatpants
  {
    id: 'MB301',
    name: 'Baggy Sweatpants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'White'],
    tags: ['bottom', 'sweatpants'],
    image: '/src/assets/mens/pants/baggy-sweatpants.png'
  },
  {
    id: 'MB302',
    name: 'Stretch Sweatpants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'sweatpants'],
    image: '/src/assets/mens/pants/stretch-sweatpants.png'
  },
  {
    id: 'MB303',
    name: 'Workout Sweatpants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['bottom', 'sweatpants'],
    image: '/src/assets/mens/pants/workout-sweatpants.png'
  },
  {
    id: 'MB304',
    name: 'Athletic Sweatpants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['bottom', 'sweatpants'],
    image: '/src/assets/mens/pants/athletic-sweatpants.png'
  },
  {
    id: 'MB305',
    name: 'Windbreaker Sweatpants',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Black', 'Red', 'Green', 'White', 'Blue'],
    tags: ['bottom', 'sweatpants'],
    image: '/src/assets/mens/pants/windbreker-sweatpants.png'
  },

  //swimtrunks *****
  {
    id: 'MB401',
    name: 'Casual Swimtrunks',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'swimtrunks'],
    image: '/src/assets/mens/pants/casual-swimtrunks.png'
  },
  {
    id: 'MB402',
    name: 'Stretch Swimtrunks',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'swimtrunks'],
    image: '/src/assets/mens/pants/stretch-swimtrunks.png'
  },
  {
    id: 'MB403',
    name: 'Workout Swimtrunks',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'swimtrunks'],
    image: '/src/assets/mens/pants/workout-swimtrunks.png'
  },
  {
    id: 'MB404',
    name: 'Athletic Swimtrunks',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'swimtrunks'],
    image: '/src/assets/mens/pants/athletic-swimtrunks.png'
  },
  {
    id: 'MB405',
    name: 'Shorter Swimtrunks',
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 19.99,
    colors: ['Blue', 'Black', 'Red', 'Green'],
    tags: ['bottom', 'swimtrunks'],
    image: '/src/assets/mens/pants/short-swimtrunks.png'
  },

  //Shoes*******************
  //Running ****
  {
    id: 'MS101',
    name: 'Ultra Light Running Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'running'],
    image: '/src/assets/mens/shoes/ultra-light-running-shoes.png'
  },
  {
    id: 'MS102',
    name: 'Padded Running Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'running'],
    image: '/src/assets/mens/shoes/padded-running-shoes.png'
  },
  {
    id: 'MS103',
    name: 'Casual Running Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'running'],
    image: '/src/assets/mens/shoes/casual-running-shoes.png'
  },
  {
    id: 'MS104',
    name: 'Workout Running Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'running'],
    image: '/src/assets/mens/shoes/workout-running-shoes.png'
  },
  {
    id: 'MS105',
    name: 'Athletic Running Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'running'],
    image: '/src/assets/mens/shoes/athletic-running-shoes.png'
  },

  //casual ***
  {
    id: 'MS201',
    name: 'Casual Comfort Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'casual'],
    image: '/src/assets/mens/shoes/casual-comfort-shoes.png'
  },
  {
    id: 'MS202',
    name: 'Casual Fancy Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'casual'],
    image: '/src/assets/mens/shoes/casual-fancy-shoes.png'
  },
  {
    id: 'MS203',
    name: 'Casual Street Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'casual'],
    image: '/src/assets/mens/shoes/casual-street-shoes.png'
  },
  {
    id: 'MS204',
    name: 'Casual Work Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'casual'],
    image: '/src/assets/mens/shoes/casual-work-shoes.png'
  },
  {
    id: 'MS205',
    name: 'Casual Athletic Shoes',
    category: 'men',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    colors: ['Black', 'Red', 'Green'],
    tags: ['shoes', 'casual'],
    image: '/src/assets/mens/shoes/casual-athletic-shoes.png'
  },


  //WOMEN CATALOG **********************************************
  // T-Shirts ***
  {
    id: 'W101',
    name: 'AthleticSports Bra',
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    price: 24.99,
    colors: ['White', 'Pink', 'Purple', 'Orange', 'Blue'],
    tags: [],
    image: '/src/assets/womens/sports-bra.png'
  },

  //ACCESSORIES CATALOG **********************************************
  // Water Bottles ***
  {
    id: 'A101',
    name: '1 Gallon Water Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red'],
    tags: ['waterbottle', 'popular'],
    image: '/src/assets/accessories/1G-bottle.png'
  },
  {
    id: 'A102',
    name: '1 Litre Water Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red'],
    tags: ['waterbottle','new'],
    image: '/src/assets/accessories/1L-bottle.png'
  },
    {
    id: 'A103',
    name: 'Shaker Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red'],
    tags: ['waterbottle','popular'],
    image: '/src/assets/accessories/shaker-bottle.png'
  },
  {
    id: 'A104',
    name: 'Casual Water Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['waterbottle',],
    image: '/src/assets/accessories/casual-bottle.png'
  },
    {
    id: 'A105',
    name: 'Fancy Water Bottle',
    category: 'accessories',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Red'],
    tags: ['waterbottle',],
    image: '/src/assets/accessories/fancy-bottle.png'
  },

  //equipment ***
  {
    id: 'E101',
    name: 'Dumbbell Set',
    category: 'equipment',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['equipment', 'new'],
    image: '/src/assets/equipment/dumbbell-set.png'
  },
  {
    id: 'E102',
    name: 'Barbell Set',
    category: 'equipment',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red', 'Purple'],
    tags: ['equipment','new'],
    image: '/src/assets/equipment/barbell-set.png'
  },
  {
    id: 'E103',
    name: 'Kettlebell Set',
    category: 'equipment',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red', 'Yellow'],
    tags: ['equipment','new'],
    image: '/src/assets/equipment/kettlebell-set.png'
  },
  {
    id: 'E104',
    name: 'Cable Set',
    category: 'equipment',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['equipment','new'],
    image: '/src/assets/equipment/cable-set.png'
  },
    {
    id: 'E105',
    name: 'Pullup Bar',
    category: 'equipment',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Red'],
    tags: ['equipment','new'],
    image: '/src/assets/equipment/pullup-bar.png'
  },
  
  //Yoga ***
  {
    id: 'Y101',
    name: 'Yoga Mat',
    category: 'yoga',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['yoga', 'new'],
    image: '/src/assets/yoga/yoga-mat.png'
  },
  {
    id: 'Y102',
    name: 'Yoga Block',
    category: 'yoga',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['yoga', 'new'],
    image: '/src/assets/yoga/yoga-block.png'
  },
  {
    id: 'Y103',
    name: 'Yoga Socks',
    category: 'yoga',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['yoga', 'new'],
    image: '/src/assets/yoga/yoga-socks.png'
  },
  {
    id: 'Y104',
    name: 'Yoga Towel',
    category: 'yoga',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['yoga', 'new'],
    image: '/src/assets/yoga/yoga-towel.png'
  },
  {
    id: 'Y105',
    name: 'Yoga Ball',
    category: 'yoga',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['yoga', 'new'],
    image: '/src/assets/yoga/yoga-ball.png'
  },

  //suglasses ***
  {
    id: 'S101',
    name: 'Visor Glasses',
    category: 'sunglasses',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['sunglasses', 'popular'],
    image: '/src/assets/sunglasses/visor-glasses.png'
  },
  {
    id: 'S102',
    name: 'Aviator Glasses',
    category: 'sunglasses',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue'],
    tags: ['sunglasses', 'new'],
    image: '/src/assets/sunglasses/aviator-glasses.png'
  },
  {
    id: 'S103',
    name: 'Round Glasses',
    category: 'sunglasses',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'White'],
    tags: ['sunglasses'],
    image: '/src/assets/sunglasses/round-glasses.png'
  },
  {
    id: 'S104',
    name: 'Square Glasses',
    category: 'sunglasses',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['Black', 'Blue', 'Green', 'Red'],
    tags: ['sunglasses'],
    image: '/src/assets/sunglasses/wayfarer-glasses.png'
  },
  {
    id: 'S105',
    name: 'Sport Glasses',
    category: 'sunglasses',
    sizes: ['Reg'],
    price: 12.99,
    colors: ['White', 'Black', 'Blue', 'Green', 'Red', 'Pink', 'Purple', 'Orange', 'Yellow'],
    tags: ['sunglasses', 'popular'],
    image: '/src/assets/sunglasses/sport-glasses.png'
  },

]

export default catalog
