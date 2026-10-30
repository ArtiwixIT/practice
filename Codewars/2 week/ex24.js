// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript

// #25: methods of arrayObject---reverse() and sort()

function sortIt(arr){
    const copy = arr.slice();
    let freq = {};

    for (let i = 0; i < copy.length; i++) {
        let n = copy[i];
        if (freq[copy[i]] === undefined) {
            freq[copy[i]] = 1;
        } else {
            freq[copy[i]]++;
        }
    }
  
    copy.sort((a,b) => {
        if (freq[a] !== freq[b]) {
            return freq[a] - freq[b];
        }
        return b - a;
    })
    return copy;
}

// console.log(sortIt([1,1,1,2,2,3]));
// console.log(sortIt([1,1,1,2,2,2,3,3,3]));
// console.log(sortIt([1,2,3,4,4,5,5,6,6]));