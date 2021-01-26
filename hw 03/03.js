var length = 20;//+prompt('Ведите длинну массива', '');
var arr = new Array(length);
var min = -220,
    max = 435;

for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
    if (arr[i] > -100 && arr[i] < 100) {
        console.log(arr[i] + ' ');
    }
}

console.log(arr);
