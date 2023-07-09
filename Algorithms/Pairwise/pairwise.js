function pairwise(arr, arg) {
  let indexArr = [];
  let copyArr = [...arr]
  for(let i = 0; i < arr.length; i++){
    for(let x = 0; x < arr.length; x++){
      if(copyArr[i] + copyArr[x] == arg && x != i){
        let firstNumIndex = arr.indexOf(copyArr[i]);
        if(indexArr.indexOf(firstNumIndex) != -1){
          for(let y = 0; y < arr.length; y++){
            if(arr[i] == arr[y] && y != firstNumIndex && indexArr.indexOf(y) == -1){
              firstNumIndex = y;
              break;
            } 
          }
        }
        indexArr.push(firstNumIndex);
        let secondNumIndex = arr.indexOf(copyArr[x]);
        if(secondNumIndex == firstNumIndex || indexArr.indexOf(secondNumIndex) != -1){
          for(let y = 0; y < arr.length; y++){
            if(arr[x] == arr[y] && y != secondNumIndex && indexArr.indexOf(y) == -1){
              secondNumIndex = y;
              break;
            } 
          }
        }
        indexArr.push(secondNumIndex);
        copyArr.splice(i, 1);
        copyArr.splice(x, 1);
      }
    }
  }
  return indexArr.reduce((partialSum, a) => partialSum + a, 0);
}

pairwise([0, 0, 0, 0, 1, 1], 1);
