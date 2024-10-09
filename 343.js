
var integerBreak = function(n) {
  if(n < 4) return n-1;
 let p = 1;
 while(n > 4){
    p*=3;
    n-=3;
 }
  return [p*n];
};

console.log(integerBreak(2));
console.log(integerBreak(3));
console.log(integerBreak(4));
console.log(integerBreak(5));
console.log(integerBreak(6));
console.log(integerBreak(7));
console.log(integerBreak(8));
console.log(integerBreak(9));
console.log(integerBreak(10));
console.log(integerBreak(11));
console.log(integerBreak(12));
console.log(integerBreak(13));
