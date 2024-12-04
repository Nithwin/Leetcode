
var minCostClimbingStairs = function(cost, sum = 0, index = -1, memo = {}) {
  if(cost[index] in memo) return memo[cost[index]];
  if(index >= cost.length || index === undefined) return 0;
  let r, l;
  l = minCostClimbingStairs(cost, sum, index + 1 || 0)
  r = minCostClimbingStairs(cost, sum, index + 2 || 0);
  memo[cost[index]] = (cost[index] || 0) + ((l > r) ? r : l);
  return memo[cost[index]];
};


console.log(minCostClimbingStairs([1,2,3,4]));
console.log(minCostClimbingStairs([10,15,20]));
