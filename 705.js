
var MyHashSet = function() {
  this.set = {};
};

MyHashSet.prototype.add = function(key) {
  this.set[key] = true;
};


MyHashSet.prototype.remove = function(key) {
  if(this.set[key]){
    delete this.set[key];
  }
};


MyHashSet.prototype.contains = function(key) {
  return this.set[key] || false;
};



var obj = new MyHashSet()
obj.add(4)
obj.add(5)
obj.add(3)
obj.remove(3);
console.log(obj.contains(4));
console.log(obj);

