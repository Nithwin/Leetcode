
var countAndSay = function(n, str = "1") {
 if(n === 1) return str;
  let s = '';
 let c = 1;
 let i;
 for(i =  1; i < str.length ;i++){
  if(str[i] == str[i-1]){
    c++;
  }
  else{
    s += c + str[i-1];
    console.log(s);
    c = 1;
  }
 }
  s += c + str[i-1];
  return countAndSay( n- 1, s);
}

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
