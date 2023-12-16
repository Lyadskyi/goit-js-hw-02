"use strict";

function checkForSpam(message) {
  message = message.toLowerCase();
  return message.includes("spam") || message.includes("sale");
  }

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ---------- REMARKS OF THE MENTOR ---------- //

// task-3.js - Well executed moments (Добре виконані моменти) //

// Гарне використання методу message.toLowerCase(); для нормалізації регістру повідомлення.
// Правильне використання методу includes() для пошуку заданих рядків ('спам' і 'розпродаж').

// task-3.js - Improvement (Покращення) //

// Змінна message повторно присвоюється з нижнім регістром. Замість цього слід використовувати нову змінну для зберігання нормалізованого рядка. Це покращує читабельність і уникнення потенційного замішання.
// У цьому випадку оператор if є зайвим. Оскільки сам вираз умови if вже оцінюється як булевий, можна повернути результат безпосередньо: return message.includes("спам") || message.includes("розпродаж");
// Додавання коментарів до коду може допомогти іншим зрозуміти ціль нормалізації і те, що перевіряє функція.
