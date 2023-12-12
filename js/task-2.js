function formatMessage(message, maxLength) {
	
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


const message = "JavaScript is awesome";
console.log(message.length); // 21


// function makeTransaction(quantity, pricePerDroid, customerCredits) {
// 	if (quantity * pricePerDroid <= customerCredits) {
// 		return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// 	} else {
// 		return `Insufficient funds!`;
// 	}
// }