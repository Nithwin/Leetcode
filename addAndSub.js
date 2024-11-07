let a = 1
let b = 3


a = a.toString(2).split('')
b = b.toString(2).split('')

let sum = [],c='',x,y;
console.log(a,b);
while(a.length || b.length){
  x = a.pop();
  y = b.pop();
  if(x == undefined) {
    sum.unshift(y);
    c='';
    continue;
  }
  if(y == undefined) {
    sum.unshift(x);
    c='';
    continue;
  }
  if((x << y << c) > 1){
    sum.unshift((x ^ y ^ c).toString());
    c = '1'
  }
  else{
    sum.unshift((x ^ y ^ c).toString());
    c = '0'
  }
}
console.log(a,b);
if(c == '1') sum.unshift('1');
console.log(sum);

console.log(parseInt(sum.join(''),2));


console.log(0 << 1 << 1);
console.log('1' ^ '1' ^ '1');





console.log(b ^ a);
console.log(1 ^ 2 );
console.log(2*3 ^ 3 );
console.log(3 ^ 4 );
console.log(4 ^ 5 );
console.log(4 >> 5);
console.log(2 >> 2);

console.log(2 & 2);
console.log(1 * 3 ^ 2);
