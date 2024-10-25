function reverse(a){
  return a.split('').reverse().join('')
}

function invert(n){
  n = n.split('');
  for(let i = 0;i<n.length;i++){
      n[i] = (n[i] === '0') ? '1':'0';
  }
  return n.join('');
}

var findKthBit = function(n, k) {
  let s = "0";
  for(let i = 1;i<n;i++){
    s += "1" + reverse(invert(s));
  }
  return s[k-1];
};

console.log(findKthBit( n = 3, k = 1));

