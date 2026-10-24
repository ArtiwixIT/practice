// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

let message1 = "buy ViAgRA now";
let message2 = "free xxxxx";
let message3 = "innocent rabbit";

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam(message1));
console.log(checkSpam(message2));
console.log(checkSpam(message3));