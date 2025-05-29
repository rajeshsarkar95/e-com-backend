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
