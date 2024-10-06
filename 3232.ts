function canAliceWin(nums: number[]): boolean {
  let s:number = 0;
  let d:number = 0;
  for(let i:number = 0;i<nums.length;i++){
      if(nums[i]<10){
          s+=nums[i];
      }
      else{
          d+=nums[i];
      }
  }
  console.log(s,d);

  return (s===d) ? false : true;
};

console.log(canAliceWin([1,2,3,4,10]));//false
console.log(canAliceWin([1,2,3,4,5,14]));//true
console.log(canAliceWin([5,5,5,25]));//true
