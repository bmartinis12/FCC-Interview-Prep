var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  this.add = (key, value) => {
    let hashK = hash(key);
    this.collection[hash(key)] = this.collection[hash(key)] || {};
    this.collection[hash(key)][key] = value;
  }

  this.remove = (key) => {
    delete this.collection[hash(key)][key];
    if (Object.keys(this.collection[hash(key)]).length == 0){
      delete this.collection[hash(key)];
    }
  }

  this.lookup = (key) => {
    return this.collection[hash(key)][key];
  }
};
