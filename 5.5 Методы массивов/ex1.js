// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, 
// чтобы разбить строку на массив символов, потом переделайте всё как нужно 
// и методом join соедините обратно.

let str = "-cat-dog-smart-tablet"
let str1 = "house-flat-floor"

console.log(str.split('-'));

function camelize(str) {
    let newStr = str.split('-'); // ['', 'cat', 'dog', 'smart', 'tablet']
    newStr = newStr.filter(elem => elem !== ""); // ['cat', 'dog', 'smart', 'tablet']
    newStr = newStr.map(word => word[0].toUpperCase() + word.slice(1)); // ['Сat', 'Dog', 'Smart', 'Tablet']
    newStr = newStr.join(''); // CatDogSmartTablet  
    return newStr;
}

console.log(camelize(str));
console.log(camelize(str1));

