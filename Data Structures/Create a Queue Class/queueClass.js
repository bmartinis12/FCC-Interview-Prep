function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function(item) {
    collection.push(item);
  }

  this.dequeue = function() {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    if(collection == 0){
      return true;
    } else {
      return false;
    }
  }
}
