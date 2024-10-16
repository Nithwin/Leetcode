var findRelativeRanks = function(score) {
  let a = [...score].sort((x,y) => x-y);
  let map = new Map();
  let s = 0;
  let x,y;
  let rank = ["Bronze Medal","Silver Mdeal","Gold Medal"];
  while(rank.length !== 0 || a.length !== 0){
    s++;
    if(rank.length !== 0){
       x = a.pop();
       y = rank.pop();
    }
    else{
      x = a.pop();
      y = s.toString();
    }
    map.set(x,y);

  }
  let result = [];
  for(i of score){
      result.push(map.get(i));
  }
  return result;
};


console.log(findRelativeRanks( [5,4,3,2,1]));
console.log(findRelativeRanks( [10,3,8,9,4]));
