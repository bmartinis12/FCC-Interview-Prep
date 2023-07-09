function selectionSort(array) {
  let arr = [];
  function findSmallest(unorderedArr, orderedArr){
    if(unorderedArr.length == 0){
      return orderedArr;
    } else {
      let smallest;
      for(let i = 0; i < unorderedArr.length; i++){
        if(smallest == undefined){
          smallest = unorderedArr[i];
        } else {
          if(unorderedArr[i] < smallest){
            smallest = unorderedArr[i];
          }
        }
      }
      orderedArr.push(smallest);
      let index = unorderedArr.indexOf(smallest);
      unorderedArr.splice(index,1);
      return findSmallest(unorderedArr, orderedArr);
    }
  }
  return findSmallest(array, arr);
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
