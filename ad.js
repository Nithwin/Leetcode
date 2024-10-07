let a = [1,2,3]


function Sum(a){
  let n = "";
  for(i of a){
    n += i.toString(2);
  }
  return Number.parseInt(n,2);
}
console.log(Sum([1,2,3]));
console.log(Sum([1,3,2]));
console.log(Sum([2,1,3]));
console.log(Sum([2,3,1]));
console.log(Sum([3,1,2]));
console.log(Sum([3,2,1]));
