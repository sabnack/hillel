var arr = new Array(20);
var min = -220,
    max = 435;

for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
}

var minMax = new Array(2),
    minIndex,
    maxIndex,
    min, 
    max;

minIndex = maxIndex = 0;
min = max = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        minIndex = i;
    }

    if (max < arr[i]) {
        max = arr[i];
        maxIndex = i;
    }
}

var result = [];

if (minIndex - maxIndex > 1 || maxIndex - minIndex > 1) {
    result = minIndex < maxIndex ? arr.slice(minIndex + 1, maxIndex) : arr.slice(maxIndex + 1, minIndex);
}

console.log(arr);
console.log(min + ' ' + minIndex + ' ' + max + ' ' + maxIndex);
console.log(result);