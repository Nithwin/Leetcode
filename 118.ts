function generate(numRows: number): number[][] {
  let num = [];
  for(let i = 0;i<numRows;i++){
      let a = []
      for(let j = 0 ; j <= i-1;  j++){
          if(j==0 || j==i){
              a.push(1);
          }
          else{
            let q = num[i-1][j]+num[i-1][j+1];
            console.log(q);

              a.push(q);
          }

      }
      a.push(1);
      num.push(a);
  }
  return num;
};

console.log(generate(5));
console.log(generate(1));

