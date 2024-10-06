var decrypt = function(code, k) {
  let a = [];
  let len = code.length;
  for(let i = 0;i<len;i++){
      if(k===0) a = [...a,0];
      else if(k>0){
        let j = 0;
        let z = i;
        let count = 0;
        while(j<k){
          z = (z+1) % len;
          count += code[z];
          j++;

        }
        a.push(count);
      }
      else{
        let j = 0;
        let z = i;
        let count = 0;
        while(j < k*-1){
          if(z-1 === -1){
            z=len-1;
          }
          else{
            z = (z-1) % len;
          }

          count += code[z];
          j++;

        }
        a.push(count);
      }
  }
  return a;
};

// console.log(decrypt(code = [5,7,1,4], k = 3));//[12,10,16,13]
// console.log(decrypt(code = [1,2,3,4], k = 0));//[0,0,0,0]
console.log(decrypt(code = [2,4,9,3], k = -2));//[12,5,6,13]
