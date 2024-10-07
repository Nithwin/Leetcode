

const permute = (str) =>{
  if ( str.length <=1 ) return [str];
  const p = [];
  for(let i = 0;i<str.length;i++){
    const re = str.slice(0,i).concat(str.slice(i+1));
    permute(re).forEach((perm) => p.push([str[i],...perm]));
  }
  return p;
}

console.log(permute(['a','b','c']));

