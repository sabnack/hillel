var length = 20;//+prompt('Ведите длинну массива', '');
var arr = new Array(length);
var min = -220,
    max = 435;
document.writeln('<pre>');
for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
    if(Math.abs(arr[i]).toString().length === 2)
    {
        document.write(arr[i] + ' ');        
    }
}
document.writeln('</pre>');
console.log(arr);
