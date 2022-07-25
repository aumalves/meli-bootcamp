const express = require('express');
const productsRoute = express.Router();

const products = [
  { id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
  ];

productsRoute.get("/", (_req, res) => {
  return res.status(200).json({products});
});

productsRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find(item => item.id === +id);

  return res.status(200).json({ product });
});

productsRoute.post("/", (req, res) => {
  products.push(req.body);

  return res.status(200).json({products});
});

productsRoute.put("/:id", (req, res) => {
  const { name, price, quantity, colors } = req.body;
  const { id } = req.params;

  const newProduct = { id: +id, name, price, quantity, colors };
  products.splice(+id - 1, 1, newProduct);

  return res.status(200).json(newProduct);
});

productsRoute.delete("/:id", (req, res) => {
  const { id } = req.params;
  products.splice(+id -1, 1);

  return res.status(204).end();
});

module.exports = productsRoute;