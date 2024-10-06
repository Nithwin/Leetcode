function finalPositionOfSnake(n: number, commands: string[]): number {
  let x:number = 0;
  let y:number = 0;

  for(let i:number = 0;i<commands.length;i++){
    if(commands[i]==="LEFT"){
      x-=1;
    }
    else if(commands[i]==="RIGHT"){
      x+=1;
    }
    else if(commands[i]==="DOWN"){
      y+=1;
    }
    else{
      y-=1;
    }

  }
  console.log(x,y);
  return y*n + x;

};


console.log(finalPositionOfSnake( 2, ["RIGHT","DOWN"]));
console.log(finalPositionOfSnake( 3, ["DOWN","RIGHT","UP"]));
