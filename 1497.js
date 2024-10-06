var canArrange = function(arr, k) {
  let a = [];
  for(i of arr){
      if(i%k === 0){
          a.push(true);
      }
      else{
          let flag = false;
          for(j of arr){
              if(i !== j && (i+j)%k === 0){
                  flag = true;
                  break;
              }
          }
          a.push(flag);
      }
  }
  return a.sort()[0];
};

console.log(canArrange([-1,1,-2,2,-3,3,-4,4],3));
console.log(canArrange([-1,-1,-1,-1,2,2,-2,-2],3));


