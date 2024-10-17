let a = [6,5,4,3,2,1];

for(let i = 1;i<a.length;i++){
  let tmp = a[i];
  let j = i-1;
  while(j >=0 && a[j] > tmp){
    a[j+1] = a[j];
    j--
  }
  a[j+1] = tmp;
}


console.log(a);
