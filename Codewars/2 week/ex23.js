// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

// Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr){
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if ((i + 1) % 3 === 0) {
        result.push(sum);
        sum = 0;
    }
  }
  return result;
}

// console.log(threeInOne([1,2,3]));
// console.log(threeInOne([1,2,3,4,5,6]));
// console.log(threeInOne([1,2,3,4,5,6,7,8,9]));
// console.log(threeInOne([1,3,5,2,4,6,7,7,7]));