var arr = [1, 5, 6, 2, 4, 7, 9, 3, 10 ,21];
console.log(arr);

// for(var i=0; i < arr.length-1; i++){
//     arr.splice(i,0,arr.pop());
// }
var n = arr.length-1;
var tmp;

for(var i=0; i < arr.length/2; i++)
{
    tmp = arr[i];
    arr[i] = arr[n-i];
    arr[n-i] = tmp;
}

console.log(arr);