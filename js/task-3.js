// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100


// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 0


// function checkAge(age) {
//   if (age >= 18) {
//   return "You are an adult";
// }
// }

// console.log(checkAge(17));


// const grade = 65;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }


// var a;
// var b;
// var c;
// console.log(a);
// console.log(b);
// console.log(c);


// // Змініть код лише під цим рядком
// var a = 5;
// var b = 10;
// var c = "I am a";
// // Змініть код лише над цим рядком

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// console.log(a);
// console.log(b);
// console.log(c);


// // Оголошення змінної
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// // Призначення змінної
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// console.log(studlyCapVar);
// console.log(properCamelCase);
// console.log(titleCaseOver);

// let camper;
// let camper;
// console.log(camper);

// const grade5 = 85;

// if (grade5 >= 90) {
//   console.log("Perfectly");
// } else if (grade5 >= 95) {
//   console.log("Good");
// } else if (grade5 >= 91) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'

// const age2 = 20;
// const type2 = age2 >= 21 ? 'adult' : 'child';
// console.log(type2); // 'adult'



// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10


// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return correctPassword == password ? "Access granted" : "Access denied, wrong password!"
// }

// console.log(checkPassword("jqueryismyjam")); // "Access granted"
// console.log(checkPassword("angul4r1sl1f3")); // "Access denied, wrong password!"
// console.log(checkPassword("r3actsux"));  // "Access denied, wrong password!"


// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// const day = 7;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }











// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// console.log(getSubscriptionPrice("starter")); // 0
// console.log(getSubscriptionPrice("professional")); // 20
// console.log(getSubscriptionPrice("organization")); // 50
// console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
// console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"










// // Глобальна змінна
// const value = "I'm a global variable";

// if (true) {
// 	// Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// // Можна звернутися до глобальної змінної
// console.log(value); // "I'm a global variable"


// if (true) {
//   // Локальна змінна
// 	const value = "I'm a local variable";
//   console.log(value); // "I'm a local variable"
// }

// // Помилка: локальну змінну не видно за межами блоку
// console.log(value); // ReferenceError: value is not defined


// const globalVar = "Global";

// console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const aVar = "A";
// 	console.log(globalVar); // Доступ до globalVariable з блоку A
//   console.log(aVar); // Доступ до aVar з блоку A
// 	// Немає доступу до bVar і cVar

// 	if(true) {
// 		const bVar = "B";
// 		console.log(globalVar); // Доступ до globalVariable з блоку B
// 	  console.log(aVar); // Доступ до aVar з блоку B
// 	  console.log(bVar); // Доступ до bVar з блоку B
// 		// Немає доступу до cVar
// 	}
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar

// if(true) {
// 	const cVar = "C";
//   console.log(globalVariable); // Доступ до globalVar з блоку C
//   console.log(cVar); // Доступ до cVar з блоку C
// 	// Немає доступу до aVar і bVar
// }

// console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // Немає доступу до aVar, bVar і cVar




// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false


// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true


// if(null) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }

// if(0) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }



// if(5) {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }


// if("") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }


// if("batman") {
// 	console.log("Block if")
// } else {
// 	console.log("Block else")
// }



// console.log("hello" && 5); // 5
// // console.log(typeof "hello"); // string
// // console.log(typeof 5); // number
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// // console.log(typeof 3); // number
// // console.log(typeof true); // boolean
// console.log(true && 3); // 3


// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""



// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false


// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }


// null && true

// function isNumberInRange(start, end, number) {
// if (number >= start && number <= end) {
//   return true;
// } else {
//   return false;
// }
// }

// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 24)); // true
// console.log(isNumberInRange(20, 50, 76)); // false


// console.log(true || false); // true
// console.log(false || true); // true

// console.log(5 || false); // 5
// console.log(false || 5); // 5

// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"


// console.log(5 || 3); // 5
// console.log(3 || 5); // 3

// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"



// console.log(0 || false); // false
// console.log(false || 0); // 0

// console.log(null || ""); // ""
// console.log("" || null); // null



// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40



// const screenWidth = 768;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm || screenWidth >= md) {
// 	console.log("Mobile or Desktop screen");
//   // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
// }


// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// console.log(checkAccess("pro")); // true
// console.log(checkAccess("starter")); // false
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("free")); // false


// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true
// console.log(!null); // !null -> !false -> true


// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// const isBlocked1 = true;
// const canChat1 = !isBlocked1; // !true -> false

// if(canChat1) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// const isOnline = true;
// const isBlocked2 = false;
// const canChat2 = isOnline && !isBlocked2; 
// // true && !false -> true && true -> true

// if(canChat2) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// result1 = "" && "foo"; // result is assigned "" (empty string)
// result2 = 2 && 0; // result is assigned 0
// result3 = "foo" && 4; // result is assigned 4
// console.log(result1);
// console.log(result2);
// console.log(result3);


// function toggleModalVisibility(isVisible) {
//   if(!isVisible) {
//     return true;
// } else {
//     return false;
// }
// }

// console.log(toggleModalVisibility(true)); // false
// console.log(toggleModalVisibility(false)); // true


// const message = "Dmytro Liadskyi Vladimirovich";
// console.log(message.length); // 21


// const message = "JavaScript is awesome";
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"


// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'


// const fullNameOne = "Jacob Mercer";
// console.log(fullNameOne.slice(1)); // 'acob Mercer'
// console.log(fullNameOne.slice(3)); // 'ob Mercer'




// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"



// function getSubstring(string, length) {
//   const subString = "Hello world";
//   console.log(subString.slice(3));
// }

// console.log(getSubstring("Hello world", 3));




// const fullName = "Jacob Mercer";
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'

// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

function getSubstring(string, length) {
  return string.slice(0, length);
}

console.log(getSubstring("Hello world", 3)) // "Hel"
console.log(getSubstring("Hello world", 5)) // "Hello"
console.log(getSubstring("Hello world", 8)) // "Hello wo"
console.log(getSubstring("Hello world", 11)) // "Hello world"
console.log(getSubstring("Hello world", 0)) // ""


console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false


const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true