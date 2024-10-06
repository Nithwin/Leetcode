var distanceBetweenBusStops = function(distance, start, destination) {
  let sum = 0;
  if(start > destination ) return 0;
  if(destination === distance.length -1 && (start === 0)) return distance[distance.length -1 ];
  for(let i=start;i<destination;i++){
    sum+=distance[i];
  }
  return sum;
};

console.log(distanceBetweenBusStops( distance = [1,2,3,4], start = 0, destination = 1));//1
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 2));//3
console.log(distanceBetweenBusStops(distance = [1,2,3,4], start = 0, destination = 3));//4
