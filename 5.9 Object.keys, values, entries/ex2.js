// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
    let cnt = 0;
    for (let key of Object.keys(obj)) {
        cnt += 1;
    }
    return cnt;
}

console.log(count(user));