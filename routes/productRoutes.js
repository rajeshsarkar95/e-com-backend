const express = require('express');
const router = express.Router();

const dummyProducts = [
  {
    _id: '1',
    name: 'Product One',
    price: 29.99,
    description: 'Description for Product One',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    _id: '2',
    name: 'Product Two',
    price: 49.99,
    description: 'Description for Product Two',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    _id: '3',
    name: 'Product Three',
    price: 19.99,
    description: 'Description for Product Three',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    _id: '4',
    name: 'Elegant Leather Bag',
    price: 59.99,
    description: 'Premium-quality leather handbag perfect for any occasion.',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    _id: '5',
    name: 'Casual Cotton Shirt',
    price: 24.99,
    description: 'Breathable cotton shirt ideal for summer wear.',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    _id: '6',
    name: 'Sporty Analog Watch',
    price: 89.99,
    description: 'Stylish analog watch with a durable strap and sleek design.',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
];

router.get('/products', (req, res) => {
  res.json(dummyProducts);
});


router.get('/products/:id', (req, res) => {
  const product = dummyProducts.find(p => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
