const { log } = require("console");

var robotSim = function(commands, obstacles) {
  const cal = (x,y) =>  x**2 + y**2;
  let start = [0,0];
  let p = 0;
  for(i of commands){
    if(i === -1){
      p = 1;
    }
    else if(i === -2){
      p = 0;
    }
    else{
      start[p] += i;
    }
  }
  return cal(start[0] , start[1]);
};



console.log(robotSim([4,-1,3],[]));
console.log(robotSim([4,-1,4,-2,4],[[2,4]]));
console.log(robotSim([6,-1,-1,6],[]));
