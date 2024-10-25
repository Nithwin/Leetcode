var sum = function(x){
  return (x*(x+1))/2;
}

var arrangeCoins = function(n) {
  let c = 0;
  c = Math.floor(Math.sqrt(n))
  console.log(c,c+1);
  return (sum(c + 1 ) > n) ? c:c+1;

};

// console.log(arrangeCoins(1));//1
// console.log(arrangeCoins(2));//1
// console.log(arrangeCoins(3));//2
// console.log(arrangeCoins(4));//2
// console.log(arrangeCoins(5));//2
// console.log(arrangeCoins(6));//3
// console.log(arrangeCoins(7));//3
// console.log(arrangeCoins(8));//3
// console.log(arrangeCoins(9));//3
// console.log(arrangeCoins(10));//4
console.log(arrangeCoins(1804289383));//60070
let a = 2;
c = Math.sqrt(a*2);
console.log((sum(c+1) < a) ? c : Math.floor(c) );
