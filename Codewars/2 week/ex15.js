// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr){
  let resultArr = [];
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  arr.forEach(item => {
    resultArr.push(item.slice(0, min))
  })
  return resultArr;
}