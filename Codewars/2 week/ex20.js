// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript

// Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s){
    let cnt = 1;
    let str = [];
    while(cnt < 6) {
        let clearS = s.trim();
        str.push(`${clearS.repeat(cnt)}`);
        cnt++;
    }
    return str.join("\n");
}

// console.log(fiveLine("  a"));
// console.log(fiveLine("\txy \n"));
// console.log(fiveLine("           Ok               "));