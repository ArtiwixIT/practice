// https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

// Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

function shuffleIt(arr, ...swap){
  for (let i = 0; i < swap.length; i++) {
    let [a, b] = swap[i];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
}


// console.log(shuffleIt([1,2,3,4,5], [1,2]));
// console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4]));
// console.log(shuffleIt([1,2,3,4,5], [1,2], [3,4], [2,3]));