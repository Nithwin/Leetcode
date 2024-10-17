
var maximumSwap = function(num) {
  let max = num;
  num = num.toString().split('')
  for(let i = 0;i<num.length-1;i++){
    let a = [...num];
      for(let j = i+1;j<num.length;j++){
        [a[i],a[j]] = [a[j],a[i]];
        if(max < Number(a.join('') )){
          max = Number(a.join(''));
        }
        [a[i],a[j]] = [a[j],a[i]];
      }
  }
  return max;
};

console.log(maximumSwap(2736));
console.log(maximumSwap(98368));
