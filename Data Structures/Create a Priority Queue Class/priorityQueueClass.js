function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  
  this.enqueue = function(item) {
    if(this.isEmpty()){
      this.collection.push(item);
    } else {
      let index = this.collection.findIndex(a => a[1] > item[1]);
      if (index !== -1) {
        this.collection.splice(index, 0, item);
      } else {
        this.collection.push(item);
      }
    }
  }

  this.dequeue = function() {
    return this.collection.shift()[0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.front = function() {
    return this.collection[0][0];
  }

  this.isEmpty = function() {
    return this.size() == 0;
  }
}
