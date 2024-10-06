let arr1 = [10,23,65,71,75,76,83]
let arr2 = [23,28,55,71,76,80,91]

let c = 0;
for(let i = 0,j = 0;i<arr1.length && j < arr2.length;){
  if(arr1[i] === arr2[j]) {
    c++;
    i++;
    j++;
  }
  else if(arr1[i] < arr2[j]) i++;
  else if(arr2[j] < arr1[i]) j++ ;

}
console.log(Math.floor(arr1.length/2));
