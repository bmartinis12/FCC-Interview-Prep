var MaxHeap = function() {
  this.heap = [null];

  let leftChild = (i) => i * 2;
  let rightChild = (i) => i * 2 + 1;
  let parent = (i) => Math.floor(i / 2);

  this.insert = (value) => {
    this.heap.push(value);
    let index = this.heap.length -1;
    let parentIndex = parent(index);
    while(index > 1 && this.heap[parentIndex] < value) {
      if(this.heap[parentIndex] < value){
        let parentValue = this.heap[parentIndex];
        this.heap[parentIndex] = value;
        this.heap[index] = parentValue;
      } else {
        break;
      }
      index = parentIndex;
      parentIndex = parent(index);
    }
  }

  this.print = () => {
    return [...this.heap];
  }
};
