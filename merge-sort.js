function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, middle));
    let rightArr = mergeSort(arr.slice(middle));
    return merge(leftArr, rightArr);
}

function merge(arr1, arr2){
    let result = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i++]);
        }
        else {
            result.push(arr2[j++]);
        }
    }
    if(i === arr1.length){
        result = result.concat(arr2.slice(j));
    }
    else{
        result = result.concat(arr1.slice(i));
    }
    return result;
}

console.log(mergeSort([3, 2, 4]));
console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5])); 
console.log(mergeSort([10, 3, 15, 7, 8, 23, 74, 18])); 