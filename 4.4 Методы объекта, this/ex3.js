// Цепь вызовов
// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // возвращаем объект, чтобы можно сделать цепочку
    },
    down() {
        this.step--;
        return this; // возвращаем объект, чтобы можно сделать цепочку
    },
    showStep: function() { // показывает текущую ступеньку
        console.log( this.step );
        return this; // возвращаем объект, чтобы можно сделать цепочку
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

console.log('цепочка:');
// цепочка:
ladder.up().up().down().showStep().down().showStep();