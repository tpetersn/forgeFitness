const catalog = [
// MEN CATALOG  **********************************************
// T-Shirts ***
{
  id: 'MT101',
  name: 'Classic T-Shirt',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],   
  price: 18.49,                          
  colors: ['White', 'Black', 'Blue', 'Brown'],
  tags: ['top', 't-shirt','new'],
  image: '/src/assets/mens/t-shirt-1.png'
},
{
  id: 'MT102',
  name: 'Performance Tee',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],    
  price: 32.50,                       
  colors: ['Gray', 'Blue'],
  tags: ['top', 't-shirt', 'popular'],
  image: '/src/assets/mens/t-shirt-2.png'
},
{
  id: 'MT103',
  name: 'Street T-Shirt',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],   
  price: 27.99,                           
  colors: ['Red', 'Gray', 'White', 'Black'],
  tags: ['top', 't-shirt', 'new'],
  image: '/src/assets/mens/t-shirt-13.png'
},
{
  id: 'MT104',
  name: 'Slim Fit Training Tee',
  category: 'men',
  sizes: ['S', 'M', 'L'],               
  price: 28.75,                          
  colors: ['Green', 'Gray'],
  tags: ['top', 't-shirt', 'popular'],
  image: '/src/assets/mens/t-shirt-14.png'
},
{
  id: 'MT105',
  name: 'Moisture-Wicking Tee',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'], 
  price: 30.25,                         
  colors: ['Gray', 'Blue', 'Red', 'Black', 'White'],
  tags: ['top', 't-shirt'],
  image: '/src/assets/mens/t-shirt-5.png'
},

// Long Sleeve ***
{
  id: 'MT201',
  name: 'Athletic Long Sleeve',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],   
  price: 37.49,                           
  colors: ['Gray', 'Black'],
  tags: ['top', 'long-sleeve'],
  image: '/src/assets/mens/long-sleeve-1.png'
},
{
  id: 'MT202',
  name: 'Training Shirt',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],       
  price: 35.99,                          
  colors: ['Green', 'Red'],
  tags: ['top', 'long-sleeve', 'sale'],
  image: '/src/assets/mens/long-sleeve-2.png'
},
{
  id: 'MT203',
  name: 'Essential Base Layer',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L'],           
  price: 28.99,                       
  colors: ['Blue', 'Black'],
  tags: ['top', 'long-sleeve', 'new'],
  image: '/src/assets/mens/longsleeve/long-sleeve-3.png'
},
{
  id: 'MT204',
  name: 'Long Sleeve Pullover',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],
  price: 48.25,                         
  colors: ['Red', 'Blue', 'Brown'],
  tags: ['top', 'long-sleeve', 'popular'],
  image: '/src/assets/mens/longsleeve/long-sleeve-4.png'
},
{
  id: 'MT205',
  name: 'Breathable Long Sleeve',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 33.00,                           
  colors: ['White', 'Gray', 'Black'],
  tags: ['top', 'long-sleeve'],
  image: '/src/assets/mens/longsleeve/long-sleeve-5.png'
},

// Muscle Shirt ***
{
  id: 'MT301',
  name: 'DryFit Muscle Tank',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L'],          
  price: 17.50,
  colors: ['Black', 'Gray'],
  tags: ['top', 'muscle-shirt', 'featured'],
  image: '/src/assets/mens/muscle/muscle-shirt-1.png'
},
{
  id: 'MT302',
  name: 'Workout Tank',
  category: 'men',
  sizes: ['M', 'L'],                    
  price: 23.49,                           
  colors: ['White', 'Blue'],
  tags: ['top', 'muscle-shirt'],
  image: '/src/assets/mens/muscle/muscle-shirt-2.png'
},
{
  id: 'MT303',
  name: 'Classic Gym Tank',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 25.25,                       
  colors: ['Red', 'Black'],
  tags: ['top', 'muscle-shirt'],
  image: '/src/assets/mens/muscle/muscle-shirt-3.png'
},
{
  id: 'MT304',
  name: 'Performance Tank',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],     
  price: 27.95,   
  colors: ['Gray', 'White'],
  tags: ['top', 'muscle-shirt', 'new'],
  image: '/src/assets/mens/muscle/muscle-shirt-4.png'
},
{
  id: 'MT305',
  name: 'Tapered Tank Top',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L'],
  price: 20.50,                         
  colors: ['Black', 'Green'],
  tags: ['top', 'muscle-shirt', 'sale'],
  image: '/src/assets/mens/muscle/muscle-shirt-5.png'
},

// Sweaters ***
{
  id: 'MT501',
  name: 'Pullover Hoodie',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 52.99,                           
  colors: ['Black', 'Gray'],
  tags: ['top', 'sweater', 'popular'],
  image: '/src/assets/mens/sweaters/sweater-1.png'
},
{
  id: 'MT502',
  name: 'Athletic Sweater',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 49.50,                         
  colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
  tags: ['top', 'sweater'],
  image: '/src/assets/mens/sweaters/sweater-2.png'
},
{
  id: 'MT503',
  name: 'Baggy Pullover Hoodie',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 47.99,                         
  colors: ['Blue', 'Red', 'Gray', 'Black', 'White'],
  tags: ['top', 'sweater'],
  image: '/src/assets/mens/sweaters/sweater-3.png'
},
{
  id: 'MT504',
  name: 'Casual Sweater',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],
  price: 58.75,                           
  colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
  tags: ['top', 'sweater'],
  image: '/src/assets/mens/sweaters/sweater-4.png'
},
{
  id: 'MT505',
  name: 'Vintage Hoodie',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 51.49,                          
  colors: ['Blue', 'Gray', 'Red', 'Black', 'White'],
  tags: ['top', 'sweater', 'new'],
  image: '/src/assets/mens/sweaters/sweater-5.png'
},

// Shorts ***
{
  id: 'MB101',
  name: 'Athletic Shorts',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  price: 17.99,
  colors: ['Black', 'Gray', 'Blue', 'White', 'Red'],
  tags: ['bottom', 'shorts', 'popular'],
  image: '/src/assets/mens/shorts/shorts-1.png'
},
{
  id: 'MB102',
  name: 'Casual Shorts',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 22.49,
  colors: ['Black', 'Gray', 'Blue', 'White'],
  tags: ['bottom', 'shorts', 'new'],
  image: '/src/assets/mens/shorts/shorts-2.png'
},
{
  id: 'MB103',
  name: 'Denim Shorts',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 27.00,
  colors: ['Blue'],
  tags: ['bottom', 'shorts'],
  image: '/src/assets/mens/shorts/shorts-3.png'
},
{
  id: 'MB104',
  name: 'Workout Lining Shorts',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 24.75,
  colors: ['Blue', 'Gray', 'Black', 'White', 'Red', 'Green', 'Orange'],
  tags: ['bottom', 'shorts', 'new'],
  image: '/src/assets/mens/shorts/shorts-4.png'
},
{
  id: 'MB105',
  name: 'Stretch Shorts',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  price: 21.25,
  colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
  tags: ['bottom', 'shorts'],
  image: '/src/assets/mens/shorts/shorts-5.png'
},

// Pants ***
{
  id: 'MB201',
  name: 'Athletic Pants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 32.99,
  colors: ['Black', 'Gray'],
  tags: ['bottom', 'athletic-pants', 'new'],
  image: '/src/assets/mens/pants/pants-1.png'
},
{
  id: 'MB202',
  name: 'Jogger Pants',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  price: 34.50,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'denim-pants'],
  image: '/src/assets/mens/pants/pants-2.png'
},
{
  id: 'MB203',
  name: 'Stretch Pants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 28.99,
  colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
  tags: ['bottom', 'stretch-pants'],
  image: '/src/assets/mens/pants/pants-3.png'
},
{
  id: 'MB204',
  name: 'Workout Pants',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 30.25,
  colors: ['Blue', 'Black', 'White', 'Red', 'Green', 'Orange'],
  tags: ['bottom', 'workout-pants'],
  image: '/src/assets/mens/pants/pants-4.png'
},
{
  id: 'MB205',
  name: 'Windbreaker Pants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 33.75,
  colors: ['Blue', 'Black', 'White', 'Red', 'Green'],
  tags: ['bottom', 'denim-pants'],
  image: '/src/assets/mens/pants/pants-5.png'
},

// Sweatpants ***
{
  id: 'MB301',
  name: 'Baggy Sweatpants',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  price: 27.95,
  colors: ['Blue', 'Black', 'White'],
  tags: ['bottom', 'sweatpants'],
  image: '/src/assets/mens/pants/sweatpants-1.png'
},
{
  id: 'MB302',
  name: 'Stretch Sweatpants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 29.50,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'sweatpants'],
  image: '/src/assets/mens/pants/sweatpants-2.png'
},
{
  id: 'MB303',
  name: 'Workout Sweatpants',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 31.99,
  colors: ['Black', 'Red', 'Green'],
  tags: ['bottom', 'sweatpants'],
  image: '/src/assets/mens/pants/sweatpants-3.png'
},
{
  id: 'MB304',
  name: 'Athletic Sweatpants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 34.25,
  colors: ['Black', 'Red', 'Green'],
  tags: ['bottom', 'sweatpants'],
  image: '/src/assets/mens/pants/sweatpants-4.png'
},
{
  id: 'MB305',
  name: 'Windbreaker Sweatpants',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 28.75,
  colors: ['Black', 'Red', 'Green', 'White', 'Blue'],
  tags: ['bottom', 'sweatpants'],
  image: '/src/assets/mens/pants/sweatpants-5.png'
},

// Swimtrunks ***
{
  id: 'MB401',
  name: 'Casual Swimtrunks',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 24.99,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'swimtrunks'],
  image: '/src/assets/mens/pants/swimtrunks-1.png'
},
{
  id: 'MB402',
  name: 'Stretch Swimtrunks',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  price: 26.50,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'swimtrunks'],
  image: '/src/assets/mens/pants/swimtrunks-2.png'
},
{
  id: 'MB403',
  name: 'Workout Swimtrunks',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 27.99,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'swimtrunks'],
  image: '/src/assets/mens/pants/swimtrunks-3.png'
},
{
  id: 'MB404',
  name: 'Athletic Swimtrunks',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  price: 28.25,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'swimtrunks'],
  image: '/src/assets/mens/pants/swimtrunks-4.png'
},
{
  id: 'MB405',
  name: 'Shorter Swimtrunks',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L'],
  price: 23.49,
  colors: ['Blue', 'Black', 'Red', 'Green'],
  tags: ['bottom', 'swimtrunks'],
  image: '/src/assets/mens/pants/swimtrunks-5.png'
},

// Running Shoes ***
{
  id: 'MS101',
  name: 'Ultra Light Running Shoes',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 57.99,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'running'],
  image: '/src/assets/mens/shoes/running-shoes-1.png'
},
{
  id: 'MS102',
  name: 'Padded Running Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 62.50,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'running'],
  image: '/src/assets/mens/shoes/running-shoes-2.png'
},
{
  id: 'MS103',
  name: 'Casual Running Shoes',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 49.99,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'running'],
  image: '/src/assets/mens/shoes/running-shoes-3.png'
},
{
  id: 'MS104',
  name: 'Workout Running Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 59.75,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'running'],
  image: '/src/assets/mens/shoes/running-shoes-4.png'
},
{
  id: 'MS105',
  name: 'Athletic Running Shoes',
  category: 'men',
  sizes: ['L', 'XL', 'XXL'],
  price: 64.25,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'running'],
  image: '/src/assets/mens/shoes/running-shoes-5.png'
},

// Casual Shoes ***
{
  id: 'MS201',
  name: 'Casual Comfort Shoes',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 45.50,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'casual'],
  image: '/src/assets/mens/shoes/casual-shoes-1.png'
},
{
  id: 'MS202',
  name: 'Casual Fancy Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],
  price: 48.99,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'casual'],
  image: '/src/assets/mens/shoes/casual-shoes-2.png'
},
{
  id: 'MS203',
  name: 'Casual Street Shoes',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 42.25,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'casual'],
  image: '/src/assets/mens/shoes/casual-shoes-3.png'
},
{
  id: 'MS204',
  name: 'Casual Work Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 46.75,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'casual'],
  image: '/src/assets/mens/shoes/casual-shoes-4.png'
},
{
  id: 'MS205',
  name: 'Casual Athletic Shoes',
  category: 'men',
  sizes: ['L', 'XL', 'XXL'],
  price: 52.40,
  colors: ['Black', 'Red', 'Green'],
  tags: ['shoes', 'casual'],
  image: '/src/assets/mens/shoes/casual-shoes-5.png'
},

// Hiking Shoes ***
{
  id: 'MS301',
  name: 'Mountain Grip Hiking Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 71.99,
  colors: ['Black', 'White', 'Red'],
  tags: ['shoes', 'hiking'],
  image: '/src/assets/mens/shoes/hiking-shoes-1.png'
},
{
  id: 'MS302',
  name: 'Trail Pro Hiking Shoes',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 78.50,
  colors: ['Gray', 'Black', 'Green'],
  tags: ['shoes', 'hiking'],
  image: '/src/assets/mens/shoes/hiking-shoes-2.png'
},
{
  id: 'MS303',
  name: 'Highland Trek Shoes',
  category: 'men',
  sizes: ['M', 'L', 'XL', 'XXL'],
  price: 74.25,
  colors: ['Orange', 'Red', 'Black'],
  tags: ['shoes', 'hiking'],
  image: '/src/assets/mens/shoes/hiking-shoes-3.png'
},
{
  id: 'MS304',
  name: 'Rugged Terrain Hikers',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 69.99,
  colors: ['Green', 'Black', 'Gray'],
  tags: ['shoes', 'hiking'],
  image: '/src/assets/mens/shoes/hiking-shoes-4.png'
},
{
  id: 'MS305',
  name: 'All-Weather Hiking Shoes',
  category: 'men',
  sizes: ['L', 'XL'],
  price: 82.00,
  colors: ['Gray', 'Black', 'Blue'],
  tags: ['shoes', 'hiking'],
  image: '/src/assets/mens/shoes/hiking-shoes-5.png'
},

// Slip-On Shoes ***
{
  id: 'MS401',
  name: 'Everyday Slip-Ons',
  category: 'men',
  sizes: ['S', 'M', 'L'],
  price: 38.99,
  colors: ['Black', 'White', 'Gray'],
  tags: ['shoes', 'slipon'],
  image: '/src/assets/mens/shoes/slipon-shoes-1.png'
},
{
  id: 'MS402',
  name: 'Soft Comfort Slip-Ons',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 42.25,
  colors: ['Red', 'Black', 'Blue'],
  tags: ['shoes', 'slipon'],
  image: '/src/assets/mens/shoes/slipon-shoes-2.png'
},
{
  id: 'MS403',
  name: 'Urban Slip-On Shoes',
  category: 'men',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  price: 35.49,
  colors: ['Gray', 'White', 'Black'],
  tags: ['shoes', 'slipon'],
  image: '/src/assets/mens/shoes/slipon-shoes-3.png'
},
{
  id: 'MS404',
  name: 'Classic Slides',
  category: 'men',
  sizes: ['S', 'M', 'L', 'XL'],
  price: 31.25,
  colors: ['Black', 'Blue', 'Red'],
  tags: ['shoes', 'slipon'],
  image: '/src/assets/mens/shoes/slipon-shoes-4.png'
},
{
  id: 'MS405',
  name: 'Comfort Flip-Flops',
  category: 'men',
  sizes: ['M', 'L', 'XL'],
  price: 28.75,
  colors: ['Gray', 'Olive', 'Black'],
  tags: ['shoes', 'slipon'],
  image: '/src/assets/mens/shoes/slipon-shoes-5.png'
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
