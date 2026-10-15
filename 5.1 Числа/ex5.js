let random = (min, max) => {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(2, 5) );
alert( random(3, 5) );