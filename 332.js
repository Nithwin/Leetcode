var findItinerary = function(tickets) {
  let start = "JFK";

  let a = [start];
  for(let i = 0;i<tickets.length;i++){
    for(let j = 0;j<tickets.length;j++){
      if(tickets[j][0] === start){
        start=tickets[j][1];
        a.push(start);
      }
    }
  }
  return new Map(tickets);
};

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
