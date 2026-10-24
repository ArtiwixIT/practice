// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// 1.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
// в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
// Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор 
// новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b),
// которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// 2.
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8


function Calculator() {
    this.action = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.calculate = function(str) {
        let expression = str.split(' ');
        let a = +expression[0];
        let b = +expression[2];
        let action = expression[1];
        return this.action[action](a,b);
    }

    this.addMethod = function(name, func) {
        return this.action[name] = (func);
    }
}

let calc = new Calculator;
console.log( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8