const express = require('express');
const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

app.listen(3001, () => console.log('🚀 app listening on port 3001'))