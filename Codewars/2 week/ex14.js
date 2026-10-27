// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  let result;
  if (n === Number.MAX_VALUE) {
    result = "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    result = "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    result = "Input number is Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    result = "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    result = "Input number is Number.POSITIVE_INFINITY";
  } else {
    result = `Input number is ${n}`;
  }
  return result;
}