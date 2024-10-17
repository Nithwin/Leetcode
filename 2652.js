
var sumOfMultiples = function(n) {
  if(n < 3) return 0;
  let sum = 0;
  let l = 3;
  let r = n;
  while(l <= r){
      if(l%5 === 0 || l%3 === 0 || l%7 === 0) sum +=l;
      if(l===r)break;
      if(r%5 === 0 || r%3 === 0 || r%7 === 0) sum +=r;
      l++;
      r--;
  }
  return sum;
};


console.log(sumOfMultiples(7));
//console.log(sumOfMultiples(10));

console.log(7%7);
