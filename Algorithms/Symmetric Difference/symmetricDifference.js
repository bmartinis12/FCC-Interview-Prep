function sym(...args) {
  let arr = [...args];
  let resArr = [];
  let combine = [];
  for(let x = 0; x < arr.length; x++){
    let numArr = [];
    for(let i = 0; i < arr[x].length; i++){
      if(numArr.indexOf(arr[x][i]) == -1){
        numArr.push(arr[x][i]);
      }
    }
    combine = combine.concat(numArr)
  }
  for(let i = 0; i < combine.length; i++){
    let count = 0;
      for(let x = 0; x < combine.length; x++){
        if(combine[x] == combine[i]){
          count++;
        }
      }
      if(count%2 == 1 && resArr.indexOf(combine[i]) == -1){
        resArr.push(combine[i]);
      }
  }
  console.log(resArr)
  return resArr;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
