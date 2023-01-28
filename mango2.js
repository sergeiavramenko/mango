function mango(quantity, price) {
    let p = 0;
    for (i = 1; i <= quantity; i++) {
            if (i %3 === 0) {
                    p++
            }
    }
 return (quantity-p)*price;
}
mango(2, 3);
mango(3, 3);
mango(5, 3);
mango(9, 5);
console.log(totalCost);