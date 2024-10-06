let a = "()[]{}";
let n = [a.charAt(0)];
let obj = {
  ")":"(",
  "]":"[",
  "}":"{",
}

for(let i = 1; i<a.length;i++){
  if(n[i-1] === obj[a.charAt(i)] && (n.length !== 0 )){
    n.pop();
    console.log(n);
 }
  else{
    n = [...n,a.charAt(i)];
    console.log(n);
  }
}

console.log(n);
