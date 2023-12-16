"use strict";

function makeTransaction(quantity, pricePerDroid, customerCredits) {
	let totalPrice = quantity * pricePerDroid;
	if (totalPrice <= customerCredits) {
		return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
	} else {
		return `Insufficient funds!`;
	}
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// ---------- REMARKS OF THE MENTOR ---------- //

// task-1.js - Improve (Вдосконалення) //

// Ти повторюєш операцію "кількість * ціна_за_дроїда" два рази всередині оператора if. Було б більш ефективно обчислити це один раз, зберегти це в змінній, а потім використовувати цю змінну як для порівняння, так і для рядкового форматування. Це зробить твій код більш чистим і ефективним.

// task-1.js - Succeeded (Вдалося) //

// Правильне використання умовної логіки для перевірки, чи може покупець дозволити собі купівлю.
// Гарне форматування коду для зручності читання.
// Правильне використання шаблонних літералів для повернення очікуваного повідомлення.
// Завдання було прийняте, але пам'ятай уникати зайвих обчислень у майбутньому коді для оптимізації і зрозумілості.
