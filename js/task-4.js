function getShippingCost(country) {
	switch (country) {
		case "China":
			return `Shipping to ${country} will cost 100 credits`;
		case "Chile":
			return `Shipping to ${country} will cost 250 credits`;
		case "Australia":
			return `Shipping to ${country} will cost 170 credits`;
		case "Jamaica":
			return `Shipping to ${country} will cost 120 credits`;
		default:
      return "Sorry, there is no delivery to your country";
	}
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// ---------- REMARKS OF THE MENTOR ---------- //

// task-4.js - Well executed moments (Добре виконані моменти) //

// Гарне використання шаблонних літералів, що робить код більш зрозумілим та легким для читання.
// Конструкція switch реалізована правильно, обробляючи всі відомі випадки і стандартний варіант, як вимагається в умовах завдання.
// Правильне форматування та відступи в коді, що полегшує читабельність та підтримку коду.

// task-4.js - Additional notes (Додаткові примітки) //

// Хоча це не критично, розташування console.log в функції для тестування не є частиною самої функції і використовується тільки для тестування. Це хороша практика виділяти тестовий код від коду для виробництва або визначення функцій.
