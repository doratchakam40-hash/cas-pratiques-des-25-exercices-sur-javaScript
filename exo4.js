const modele = (product, price, quantity) => {
let total = price * quantity;
return `You purchased ${quantity} units of ${product} for a total price of ${total} cfa`;
}
console.log(modele("Mouse", 1500, 3));//