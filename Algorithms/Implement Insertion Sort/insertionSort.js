function insertionSort(array) {
  let sortedArray = [];
  function insert(sortedArr, arr){
    if(sortedArr.length == 0){
      sortedArr.push(arr[0]);
      arr.shift();
      return insert(sortedArr, arr);
    } else {
      if(arr.length == 0){
        console.log(arr,sortedArr)
        return sortedArr;
      } else {
        let num = arr.shift();
        for(let i = 0; i < sortedArr.length; i++){
          if(num <= sortedArr[i]){
            sortedArr.splice(i, 0, num);
            break;
          } else if(sortedArr.length - 1 == i){
            sortedArr.push(num);
            break;
          }
        }
        return insert(sortedArr, arr);
      }
    }
  }
  return insert(sortedArray, array);
}

insertionSort([5, 4, 33, 2, 8]);
