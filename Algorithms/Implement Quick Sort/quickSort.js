function quickSort(array) {
  let pivot = array[Math.round(array.length/2)];
  let lessArr = [];
  let greaterArr = [];
  for(let num of array){
    if(num <= pivot){
      lessArr.push(num);
    } else {
      greaterArr.push(num);
    }
  }
  lessArr = sorted(lessArr);
  greaterArr = sorted(greaterArr);
  return lessArr.concat(greaterArr);
}

function sorted(arr){
  let sortedArr = [];
  for(let num of arr){
    if(sortedArr.length == 0){
      sortedArr.push(num);
    } else {
      for(let i = 0; i < sortedArr.length; i++){
        if(num <= sortedArr[i]){
          sortedArr.splice(i, 0, num);
          break;
        } else if(sortedArr.length - 1 == i){
          sortedArr.push(num);
          break;
        }
      }
    }
  }
  return sortedArr;
}

quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
