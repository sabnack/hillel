var arr = [1, 5, 6, 2, 4, 7, 9, 3, 10];
console.log(arr);

for(var i=0; i < arr.length-1; i++){
    arr.splice(i,0,arr.pop());
}

console.log(arr);