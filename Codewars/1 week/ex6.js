// https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript

function colorOf(r,g,b) {
  const colors = [r.toString(16), g.toString(16), b.toString(16)];
  let result = '#';

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    let code = color.length === 1 ? `0${color}` : color;
    result += code;
  }
  
  return result;
}