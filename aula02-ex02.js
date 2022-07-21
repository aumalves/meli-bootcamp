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
  ]

function func1 () {
  products.forEach((element, index) => {
    element.id = index +1
  });
};

function func2 () {
  products.forEach((element) => {
    console.log(element.name);
  });
};

function func3 () {
  item = products.find((element) => element.id === 3);
  console.log(item)
};

function func4 () {
  item = products.filter((element) => element.colors.some(color => color === 'black'))
  console.log(item)
};

function func5 () {
  item = products.filter((element) => element.colors.length === 0)
  console.log(item)
}
