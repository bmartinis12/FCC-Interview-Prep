function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {

  this.heap = [null];

  let leftChild = (i) => i * 2;
  let rightChild = (i) => i * 2 + 1;
  let parent = (i) => Math.floor(i / 2);

  this.insert = (value) => {
    this.heap.push(value);
    let index = this.heap.length -1;
    let parentIndex = parent(index);
    while(index > 1 && this.heap[parentIndex] > value) {
      if(this.heap[parentIndex] > value){
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

  this.remove = () => {
    this.heap = [...this.heap];
    let min = this.heap[0];
    let last = this.heap.pop();
    this.heap[0] = last;
    this.heapify(0);
    return min;
  }

  this.heapify = (i) => {
    let small = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let length = this.heap.length;
    if (l < length && this.heap[l] < this.heap[small]) {
      small = l;
    }

    if (r < length && this.heap[r] < this.heap[small]) {
      small = r;
    }

    if (small != i) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[small];
      this.heap[small] = temp;
      this.heapify(small);
    }
  }

  this.sort = (heap = this.heap) => {
    let sortedArr = [];
    for(let i = 0; i < heap.length; i++){
      sortedArr.push(this.remove());
    }
    sortedArr.shift();
    return sortedArr;
  }
};
