let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
  ];

products.push({name: 'Guia do Mochileiro das galaxias', price: 42, quantity: 42, colors: []});
console.log('ex3.1', products);

const newProducts = products.filter((element) => element.quantity !== 0);
console.log('ex3.2', newProducts);

function somaQuantity() {
  let soma = 0
  products.forEach(element => {
    soma += element.quantity
  });
  console.log('somaQuantity', soma);
};

somaQuantity();

products.forEach(element => {
  if(element.price > 500) {
    console.log('ex3.4', element);
  }
});

products.forEach(element => {
  if(element.name.includes('o')) {
    console.log('ex3.5', element)
  };
});


