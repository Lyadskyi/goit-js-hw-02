function makeTransaction(quantity, pricePerDroid, customerCredits) {
	if (quantity * pricePerDroid <= customerCredits) {
		return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
	} else {
		return `Insufficient funds!`;
	}
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!" 15000 <= 23000
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!" 3000 <= 15000
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!" "Недостатньо коштів" 50000 <= 8000
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!" "Недостатньо коштів" 16000<=10000
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!" 5000 <= 5000
