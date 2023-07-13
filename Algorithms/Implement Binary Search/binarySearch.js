function binarySearch(searchList, value, left=0, right=searchList.length-1, path=[]) {
  let mid = Math.floor((left+right)/2);
  path.push(searchList[mid]);
  if(searchList[mid] == value){
    return path;
  }
  if(left>=right){
    return "Value Not Found";
  }
  if(searchList[mid] > value){
    return binarySearch(searchList, value, left, mid-1, path);
  }
  return binarySearch(searchList, value, mid+1, right, path);
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

binarySearch(testArray, 1);
