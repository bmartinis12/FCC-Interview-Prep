function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  
  this.push = function(item) {
    collection.push(item);
  }

  this.pop = function() {
    return collection.pop();;
  }

  this.peek = function() {
    return collection[collection.length-1];
  }

  this.isEmpty = function() {
    if(collection.length == 0){
      return true;
    } else {
      return false;
    }
  }

  this.clear = function() {
    collection = [];
  }
}
