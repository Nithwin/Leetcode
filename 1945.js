var getLucky = function(s, k) {
  let sum = "";
  for(let i = 0;i<s.length;i++){
    sum+=s.charCodeAt(i)-96;
  }
  while(k>0){
    let s = 0;
    for(i of sum){
      s += Number(i);
    }
    sum = String(s);
    k--;
  }
  return sum;
};

// console.log(getLucky("iiii", 1));
// console.log(getLucky("leetcode", 2));
// console.log(getLucky( "zbax", 8));
console.log(getLucky( "dbvmfhnttvr", 5));
