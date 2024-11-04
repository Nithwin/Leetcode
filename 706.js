
var MyHashMap = function() {
  this.map = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  return this.map[key] || -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  delete this.map[key]
};

var obj = new MyHashMap();
obj.put(4,2);
obj.put(3,2);
obj.put(4,1);
console.log(obj.get(4));
obj.remove(4);

console.log(obj);
