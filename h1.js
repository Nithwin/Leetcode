
function timeConversion(s) {
  let time = s.substring(8);
  if(time == 'AM') return s.substring(0,8);
  s = s.substring(0,8).split(':');
  let hrs = Number(s[0]) + 12;
  console.log(hrs);
  hrs = hrs == 24 ? "00" : hrs.toString();
  return [hrs,s[1],s[2]].join(":");
}

//console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
