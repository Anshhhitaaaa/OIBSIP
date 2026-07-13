
export const mockOffers = [
  {
    id: 'off1',
    title: '🎉 50% Off First Order',
    description: 'Get half-price on your first order! Use code FIRST50 at checkout',
    discount: '50%',
    code: 'FIRST50',
    color: 'from-char-orange to-deep-tomato',
    icon: '🔥'
  },
  {
    id: 'off2',
    title: '💰 10% Cashback',
    description: '10% cashback on all orders above ₹500. Valid till end of month',
    discount: '10%',
    code: 'CASHBACK10',
    color: 'from-basil-green to-teal-600',
    icon: '💸'
  },
  {
    id: 'off3',
    title: '🍕 Buy 1 Get 1 Free',
    description: 'Buy any large pizza and get another one free! Perfect for sharing',
    discount: 'BOGO',
    code: 'BOGO',
    color: 'from-yellow-500 to-orange-400',
    icon: '🎁'
  }
];

export const mockPizzas = [
  {
    id: 'p1',
    name: 'Margherita',
    description: 'San Marzano tomatoes, fresh mozzarella, basil',
    price: 499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Classic'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [{ id: 'v5', name: 'Fresh Basil', price: 15 }],
    toppings: ['Basil']
  },
  {
    id: 'p2',
    name: 'Funghi',
    description: 'Wild mushrooms, gorgonzola, rosemary',
    price: 599,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Signature'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c3', name: 'Gorgonzola Dolce', price: 40 },
    veggies: [{ id: 'v2', name: 'Sautéed Mushrooms', price: 35 }],
    toppings: ['Mushrooms', 'Gorgonzola']
  },
  {
    id: 'p3',
    name: 'Pepperoni',
    description: 'Spicy pepperoni, mozzarella, oregano',
    price: 549,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600',
    tags: ['Meat', 'Classic'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [],
    toppings: ['Pepperoni']
  },
  {
    id: 'p4',
    name: 'Quattro Formaggi',
    description: 'Mozzarella, gorgonzola, parmesan, ricotta',
    price: 649,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Cheese'],
    base: { id: 'b2', name: 'Roman', price: 30 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c3', name: 'Gorgonzola Dolce', price: 40 },
    veggies: [],
    toppings: ['Gorgonzola', 'Parmesan', 'Ricotta']
  },
  {
    id: 'p5',
    name: 'Hawaiian',
    description: 'Ham, pineapple, mozzarella, sweet onion',
    price: 599,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    tags: ['Meat', 'Sweet'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [{ id: 'v3', name: 'Caramelized Onions', price: 25 }],
    toppings: ['Ham', 'Pineapple']
  },
  {
    id: 'p6',
    name: 'Veggie Supreme',
    description: 'Bell peppers, mushrooms, olives, onions, basil',
    price: 649,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegetarian', 'Healthy'],
    base: { id: 'b3', name: 'Whole Wheat', price: 20 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [
      { id: 'v1', name: 'Roasted Bell Peppers', price: 30 },
      { id: 'v2', name: 'Sautéed Mushrooms', price: 35 },
      { id: 'v3', name: 'Caramelized Onions', price: 25 },
      { id: 'v4', name: 'Kalamata Olives', price: 30 },
      { id: 'v5', name: 'Fresh Basil', price: 15 }
    ],
    toppings: ['Bell Peppers', 'Mushrooms', 'Olives', 'Onions']
  },
  {
    id: 'p7',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, BBQ sauce, red onion, cilantro',
    price: 699,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
    tags: ['Meat', 'Signature'],
    base: { id: 'b2', name: 'Roman', price: 30 },
    sauce: { id: 's4', name: 'Spicy Arrabbiata', price: 25 },
    cheese: { id: 'c2', name: 'Smoked Provolone', price: 30 },
    veggies: [{ id: 'v3', name: 'Caramelized Onions', price: 25 }],
    toppings: ['Chicken', 'Red Onion']
  },
  {
    id: 'p8',
    name: 'Diavola',
    description: 'Spicy salami, chili flakes, mozzarella, oregano',
    price: 599,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600',
    tags: ['Meat', 'Spicy'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's4', name: 'Spicy Arrabbiata', price: 25 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [],
    toppings: ['Spicy Salami', 'Chili Flakes']
  },
  {
    id: 'p9',
    name: 'Prosciutto e Rucola',
    description: 'Prosciutto, arugula, parmesan, lemon',
    price: 749,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
    tags: ['Meat', 'Premium'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [{ id: 'v8', name: 'Arugula', price: 20 }],
    toppings: ['Prosciutto', 'Arugula', 'Parmesan']
  },
  {
    id: 'p10',
    name: 'Truffle Mushroom',
    description: 'Wild mushrooms, truffle cream, parmesan, chives',
    price: 799,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Premium'],
    base: { id: 'b4', name: 'Gluten-Free', price: 50 },
    sauce: { id: 's5', name: 'White Truffle Cream', price: 80 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [
      { id: 'v2', name: 'Sautéed Mushrooms', price: 35 },
      { id: 'v5', name: 'Fresh Basil', price: 15 }
    ],
    toppings: ['Mushrooms', 'Truffle']
  },
  {
    id: 'p11',
    name: 'Pesto Veggie',
    description: 'Pesto sauce, roasted bell peppers, artichokes, olives',
    price: 649,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Fresh'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's3', name: 'Pesto Genovese', price: 30 },
    cheese: { id: 'c4', name: 'Burrata', price: 60 },
    veggies: [
      { id: 'v1', name: 'Roasted Bell Peppers', price: 30 },
      { id: 'v6', name: 'Roasted Artichokes', price: 40 },
      { id: 'v4', name: 'Kalamata Olives', price: 30 }
    ],
    toppings: ['Pesto', 'Artichokes']
  },
  {
    id: 'p12',
    name: 'Bacon & Egg',
    description: 'Crispy bacon, sunny side up egg, mozzarella',
    price: 649,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    tags: ['Meat', 'Breakfast'],
    base: { id: 'b5', name: 'Stuffed Crust', price: 80 },
    sauce: { id: 's2', name: 'Creamy Garlic', price: 20 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [],
    toppings: ['Bacon', 'Egg']
  },
  {
    id: 'p13',
    name: 'Chicken Tikka',
    description: 'Spiced chicken tikka, onions, bell peppers, cilantro',
    price: 749,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    tags: ['Meat', 'Spicy', 'Indian'],
    base: { id: 'b1', name: 'Neapolitan', price: 0 },
    sauce: { id: 's4', name: 'Spicy Arrabbiata', price: 25 },
    cheese: { id: 'c2', name: 'Smoked Provolone', price: 30 },
    veggies: [
      { id: 'v1', name: 'Roasted Bell Peppers', price: 30 },
      { id: 'v3', name: 'Caramelized Onions', price: 25 }
    ],
    toppings: ['Chicken Tikka', 'Onions', 'Bell Peppers']
  },
  {
    id: 'p14',
    name: 'Paneer Makhani',
    description: 'Creamy makhani sauce, paneer, onions, cilantro',
    price: 699,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Indian', 'Premium'],
    base: { id: 'b3', name: 'Whole Wheat', price: 20 },
    sauce: { id: 's5', name: 'White Truffle Cream', price: 80 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [
      { id: 'v3', name: 'Caramelized Onions', price: 25 }
    ],
    toppings: ['Paneer', 'Onions']
  },
  {
    id: 'p15',
    name: 'Spinach & Feta',
    description: 'Fresh spinach, feta cheese, olives, garlic',
    price: 649,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1511689660966-40a8ae0e9dce?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Fresh'],
    base: { id: 'b2', name: 'Roman', price: 30 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c4', name: 'Burrata', price: 60 },
    veggies: [
      { id: 'v4', name: 'Kalamata Olives', price: 30 },
      { id: 'v8', name: 'Arugula', price: 20 }
    ],
    toppings: ['Spinach', 'Feta', 'Olives']
  },
  {
    id: 'p16',
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, bacon, ham, ground beef',
    price: 849,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
    tags: ['Meat', 'Signature'],
    base: { id: 'b5', name: 'Stuffed Crust', price: 80 },
    sauce: { id: 's1', name: 'San Marzano Tomato', price: 0 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [],
    toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Ground Beef']
  },
  {
    id: 'p17',
    name: 'Veggie Delight',
    description: 'Bell peppers, mushrooms, olives, onions, tomatoes, jalapeños',
    price: 699,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=800',
    tags: ['Vegetarian', 'Healthy'],
    base: { id: 'b4', name: 'Gluten-Free', price: 50 },
    sauce: { id: 's3', name: 'Pesto Genovese', price: 30 },
    cheese: { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
    veggies: [
      { id: 'v1', name: 'Roasted Bell Peppers', price: 30 },
      { id: 'v2', name: 'Sautéed Mushrooms', price: 35 },
      { id: 'v4', name: 'Kalamata Olives', price: 30 }
    ],
    toppings: ['Bell Peppers', 'Mushrooms', 'Olives', 'Onions', 'Tomatoes', 'Jalapeños']
  }
];

export const mockBases = [
  { id: 'b1', name: 'Neapolitan', price: 0, description: 'Soft, pillowy center with charred leopard spots' },
  { id: 'b2', name: 'Roman', price: 30, description: 'Thin, crispy "pinsa" style' },
  { id: 'b3', name: 'Whole Wheat', price: 20, description: 'Nutty, rustic whole wheat crust' },
  { id: 'b4', name: 'Gluten-Free', price: 50, description: 'Delicious gluten-free base' },
  { id: 'b5', name: 'Stuffed Crust', price: 80, description: 'Cheese-filled crispy edge' }
];

export const mockSauces = [
  { id: 's1', name: 'San Marzano Tomato', price: 0 },
  { id: 's2', name: 'Creamy Garlic', price: 20 },
  { id: 's3', name: 'Pesto Genovese', price: 30 },
  { id: 's4', name: 'Spicy Arrabbiata', price: 25 },
  { id: 's5', name: 'White Truffle Cream', price: 80 }
];

export const mockCheeses = [
  { id: 'c1', name: 'Fresh Mozzarella', price: 0 },
  { id: 'c2', name: 'Smoked Provolone', price: 30 },
  { id: 'c3', name: 'Gorgonzola Dolce', price: 40 },
  { id: 'c4', name: 'Burrata', price: 60 }
];

export const mockVeggies = [
  { id: 'v1', name: 'Roasted Bell Peppers', price: 30 },
  { id: 'v2', name: 'Sautéed Mushrooms', price: 35 },
  { id: 'v3', name: 'Caramelized Onions', price: 25 },
  { id: 'v4', name: 'Kalamata Olives', price: 30 },
  { id: 'v5', name: 'Fresh Basil', price: 15 },
  { id: 'v6', name: 'Roasted Artichokes', price: 40 },
  { id: 'v7', name: 'Sun-Dried Tomatoes', price: 35 },
  { id: 'v8', name: 'Arugula', price: 20 }
];

export const mockInventory = [
  { id: 'i1', name: 'Neapolitan Dough', type: 'base', stock: 45, threshold: 20, unit: 'balls' },
  { id: 'i2', name: 'Roman Dough', type: 'base', stock: 30, threshold: 15, unit: 'balls' },
  { id: 'i3', name: 'San Marzano Tomatoes', type: 'sauce', stock: 120, threshold: 40, unit: 'cans' },
  { id: 'i4', name: 'Fresh Mozzarella', type: 'cheese', stock: 18, threshold: 20, unit: 'kg' },
  { id: 'i5', name: 'Basil', type: 'vegetable', stock: 6, threshold: 10, unit: 'bunches' },
  { id: 'i6', name: 'Mushrooms', type: 'vegetable', stock: 3.5, threshold: 5, unit: 'kg' }
];

export const mockOrders = [
  {
    id: 'o1',
    customer: { name: 'Arjun Mehta', email: 'arjun@example.com' },
    items: [mockPizzas[0], { ...mockPizzas[1], quantity: 2 }],
    total: 1697,
    status: 'Sent to Delivery',
    createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString()
  },
  {
    id: 'o2',
    customer: { name: 'Priya Singh', email: 'priya@example.com' },
    items: [mockPizzas[2]],
    total: 549,
    status: 'In Kitchen',
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  },
  {
    id: 'o3',
    customer: { name: 'Rahul Verma', email: 'rahul@example.com' },
    items: [mockPizzas[3]],
    total: 649,
    status: 'Order Received',
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  }
];

export const mockUserOrders = [
  {
    id: 'uo1',
    items: [mockPizzas[0]],
    total: 499,
    status: 'Sent to Delivery',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    estimatedDelivery: new Date(Date.now() + 1000 * 60 * 10).toISOString()
  },
  {
    id: 'uo2',
    items: [mockPizzas[1], mockPizzas[2]],
    total: 1148,
    status: 'Delivered',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString()
  }
];

export const orderStatuses = ['Order Received', 'In Kitchen', 'Sent to Delivery', 'Delivered'];

