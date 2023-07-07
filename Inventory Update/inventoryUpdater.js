function updateInventory(arr1, arr2) {
    for(let i = 0; i < arr2.length; i++){
        let count = 0;
        arr1.forEach(item => {
            if(item[1] == arr2[i][1]){
                item[0] = arr2[i][0] + item[0];
                count++;
            }
        })
        if(count == 0){
            arr1.push(arr2[i]);
        }
    }
    return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
