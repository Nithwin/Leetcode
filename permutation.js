

const permute = (str) =>{
  if ( str.length <=1 ) return [str];
  const p = [];
  for(let i = 0;i<str.length;i++){
    const re = str.slice(0,i)+str.slice(i+1);
    let w = permute(re);
    w.forEach((perm) => p.push(str[i]+perm));
  }
  return p;
}

function permutate(s){
  if(s.length <= 1 ) return [s];
  const p = [];
  for(let i = 0;i<s.length;i++){
    let img = s.slice(0,i)+s.slice(i+1)
    let z = permutate(img)
    console.log(img);
      z.forEach(per => p.push(s[i]+per));
  }
  return p;

}

console.log(permute("abc"));
console.log(permutate("abc"));

