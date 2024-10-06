var majorityElement = function(nums) {
  let map = new Map();
  let max = 0;
  for(i of nums){
    if(map.has(i)){
      let a = map.get(i);
      map.set(i,a+1);
      if(max < a){
        max = a;
      }
    }
    else{
      map.set(i,0);
      if(max < map.get(i)){
        max = a;
      }
    }
  }
  return max;
};

console.log(majorityElement([2,2,1,1,1,2,2]));
