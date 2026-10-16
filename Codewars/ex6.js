// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r,g,b) {
  let t1 = r.toString(16);
  if (t1.length == 1) {
    t1 = "0" + t1;
  }

  let t2 = g.toString(16);
  if (t2.length == 1) {
    t2 = "0" + t2;
  } 

  let t3 = b.toString(16);
  if (t3.length == 1) {
    t3 = "0" + t3;
  }

  return `#${t1 + t2 + t3}`;
}