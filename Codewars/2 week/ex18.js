// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str){
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, -1).toUpperCase() + words[i].slice(-1).toLowerCase();
  }
  return words.join(" ");
}