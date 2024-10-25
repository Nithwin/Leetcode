let n = ["/a/b/c","/a/b/ca","/a/b/d"]
let a = []
const Contains = (n) =>{
  if(a.includes(i)){
    return a;
  }
  for(i of a){
    if(n.includes(i)){
      return a;
    }
  }
  a.push(n);
  return a;
}


for(i of n){
  console.log(Contains(i));
}

console.log(a);
