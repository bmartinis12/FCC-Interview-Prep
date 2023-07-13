function mergeSort(array) {
  let sortedArr = [];

  function splitSort(arr){
    if(arr.length == 1){
      return sort(arr[0])
    } else {
      let split = arr.splice(0, Math.round(arr.length/2));
      splitSort(arr);
      splitSort(split);
    }
  }

  function sort(number){
    if(sortedArr.length == 0){
      sortedArr.push(number)
    } else {
      for(let i = 0; i < sortedArr.length; i++){
        if(number <= sortedArr[i]){
          sortedArr.splice(i, 0, number);
          break;
        }
        if(sortedArr.length - 1 == i){
          sortedArr.push(number);
          break;
        }
      }
    }
    return sortedArr
  }
  splitSort(array);
  return sortedArr;
}

mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
