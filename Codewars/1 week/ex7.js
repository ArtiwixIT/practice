// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr,n){
  //coding here..
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) { 
    const value = arr[i].toFixed(2);
    if (value < n) {
      cnt++;
    }
  }
  return cnt;
}