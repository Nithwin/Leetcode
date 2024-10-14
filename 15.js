// let nums = [0,0,0,0]
// nums = nums.sort();
// console.log(nums);
// let a = [];
// for(let i = 0;i<nums.length-1;i++){
//   for(let j = i+1;j<nums.length-1;j++){
//     let n = nums[i]+nums[j]+nums[j+1];
//     if(n===0){
//       a = [...a,[nums[i],nums[j],nums[j+1]]];
//     }
//   }
// }


console.log([-1,0,1,2,-1,-4].sort());

let a = [0, 0, 0, 0].sort();
console.log(a);

let set = new Set();
let i = 0, j = 0, k = 0;
let arr = [];
while (i < a.length - 1) {
  k = a.length - 1;
  j = i + 1;
  while (j < k) {
    console.log([a[i], a[j], a[k]]);
    let sum = a[i] + a[j] + a[k];
    if (sum === 0) {
      let triplet = [a[i], a[j], a[k]].sort().toString();
      if (!set.has(triplet)) {
        set.add(triplet);
        arr.push([a[i], a[j], a[k]]);
      }
    }
    k--;
    j++;
  }
  i++;
}

console.log(arr);

console.log(map.has([0,0,0]));
