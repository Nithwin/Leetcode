
let items = [[1,2],[3,2],[2,4],[5,6],[3,5],[3,4]]
let queries = [1,2,3,4,5,6]







var maximumBeauty = function(items, queries) {
  let map = new Map();
  let max = 0;
  let prices = [], beauties = [];
  items.sort((x, y) => x[0] - y[0]);
  for (const [price, beauty] of items) {
    max = Math.max(max, beauty);
    if(prices.includes(price)){
      let index = prices.indexOf(price);
      prices[index] = price;
      beauties[index] = beauty;
      continue;
    }
    prices.push(price);
    beauties.push(max);
  }
  function findMax(price){
    let l = 0, r = prices.length - 1;
    let bestBeauty = 0;
    while(l <= r){
      let m = ~~((l + r) / 2)
      if(price >= prices[m]){
        bestBeauty = beauties[m]
        l = m + 1;
      }
      else{
        r = m - 1;
      }
    }
    return bestBeauty;
  }

  return queries.map(findMax);
};


console.log(maximumBeauty(items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]));
//console.log(maximumBeauty(items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]));
//console.log(maximumBeauty(items = [[10,1000]], queries = [5]));


// let q = [117849380,116772666,194969378,192695463,156320689,109498503,135198829,185868647,105075825,143670458,138833248,119611187,163291234,137202167,172213977,179800172,103998033,188294303]

// let i = [[407832940,974485367],[42109062,875961850],[915050020,828230],[438156125,417229404],[427687015,811906405],[509052707,703894222],[215322730,189273260],[979714031,661125765],[137015902,948446412],[53764201,743962227],[939683203,239288435]]



// console.log(i);
// i.sort((x,y) => x[0] - y[0]);
// console.log(i);
