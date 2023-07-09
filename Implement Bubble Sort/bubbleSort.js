function bubbleSort(array) {
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    if(newArr.length == 0){
      newArr.push(array[i])
    } else {
      let index = newArr.findIndex(num => array[i] <= num);
      if(index == -1){
        newArr.splice(newArr.length, 0, array[i]);
      } else {
        newArr.splice(index, 0, array[i]);
      }
    }
  }
  return newArr;
}

bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
