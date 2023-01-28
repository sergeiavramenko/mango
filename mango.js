function mango(quantity, price){
   let totalCost = (quantity - Math.floor(quantity/3)) * price;
 return totalCost;
}
mango(2, 3);
mango(3, 3);
mango(5, 3);
mango(9, 5);
console.log(totalCost);



