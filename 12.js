
var intToRoman = function(num) {
  let a = "";
  while(num !== 0){
      if(num >= 1000){
          num-=1000;
          a += "M";
      }
      else if(num >= 900 && num < 1000){
          num-=900;
          a += "CM";
      }
      else if(num >= 500){
          num-=500;
          a += "D";
      }
      else if(num >= 400 && num < 500){
          num-=400;
          a += "CD";
      }
      else if(num >= 100){
          num-=100;
          a += "C";
      }
      else if(num >= 90 && num < 100){
          num-=90;
          a += "XC";
      }
      else if(num >= 50){
          num-=50;
          a += "L";
      }
      else if(num >= 40 && num < 50){
          num-=40;
          a += "XL";
      }
      else if(num >= 10){
          num-=10;
          a += "X";
      }
      else if(num >= 9 && num < 10){
          num-=9;
          a += "IX";
      }
      else if(num >= 5){
          num-=5;
          a += "V";
      }
      else if(num >= 4 && num < 5){
          num-=4;
          a += "IV";
      }
      else{
          num-=1;
          a += "I";
      }
  }

  return a;
};

console.log(intToRoman(3749));
