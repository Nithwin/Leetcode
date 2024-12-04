
var maxArea = function(height) {
  let len = height.length - 1
  let maxArr = [], max = height[len];
  let minArr = [], min = height[0];
  for(let l = 0 , r = len; l < len || r >= 0 ;l++, r--){
      if(max < height[r]){
          max = height[r];
      }
      if(min > height[l]){
          min = height[l];
      }
      maxArr.unshift(max);
      minArr.push(min);
  }
  let sum = 0;
  console.log(max);
  for(let i = 0; i < len; i++){
    if(maxArr[i] === max){
      sum += max;
      console.log(sum,height[i]);
    }
  }
  return sum;
};


console.log(maxArea(height = [1,8,6,2,5,4,8,3,7]));
console.log(maxArea([4,3,2,1,4]));
 console.log(maxArea(height = [1,1]));
console.log(maxArea(height =[1,2,1]));
