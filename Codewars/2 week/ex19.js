// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

//Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

// Заглавные буквы A–Z	65–90
// Строчные буквы a–z	97–122

function topSecret(str){
    let chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        let code = chars[i].charCodeAt();
        let shift = chars[i].charCodeAt() - 3;

        if (code >= 65 && code <= 90) {
            if (shift < 65) {
               chars[i] = String.fromCharCode(shift + 26); 
            } else {
                chars[i] = String.fromCharCode(shift);
            } 
        }
        if (code >= 97 && code <= 122) {
            if (shift < 97) {
               chars[i] = String.fromCharCode(shift + 26); 
            } else {
                chars[i] = String.fromCharCode(shift);
            } 
        }
    }
    return chars.join("");
}

//question1: The top secret file number is...
answer1="2588";
//question2: Super agent's name is...
answer2="kQAbKL";
//question3: He stole the treasure is...
answer3="Train tire";

// console.log(topSecret("Pb qdph lv Mrkq"));      // ожидается: "My name is John"
// console.log(topSecret("wklv lv dq hadpsoh"));   // ожидается: "this is an example"
// console.log(topSecret("Khoor Zruog!"));         // ожидается: "Hello World!"