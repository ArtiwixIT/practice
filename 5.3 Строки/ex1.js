// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

let name = "артём";

function ucFirst(str) {
    if (!str) {
        return "А где? :D"
    }
    let firstSymbolUp = str[0].toUpperCase();
    return firstSymbolUp + str.slice(1);
}

console.log(ucFirst(name));