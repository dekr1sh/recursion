function fibs(n){
    if(n === 0){
        return [];
    }
    else if(n === 1){
        return [0];
    }

    let fibsArr = [0, 1];
    for(let i = 2; i < n; i++){
        fibsArr[i] = fibsArr[i - 1] + fibsArr[i - 2];
    }
    return fibsArr;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));


function fibsRec(n){
    if(n === 0){
        return [];
    }
    else if(n === 1){
        return [0];
    }
    else if(n === 2){
        return [0, 1];
    }
    let fibsArr = fibsRec(n - 1);
    fibsArr[n - 1] = fibsArr.at(-1) + fibsRec(n - 2).at(-1);
    return fibsArr;
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));