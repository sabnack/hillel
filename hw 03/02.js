var arr = new Array(20);

var min = 1,
    max = 20;

for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);

    if (index % 2 != 0) {
        arr[index] = 0;
    }
}

console.log(arr);