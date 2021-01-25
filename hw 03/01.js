var sum = 0;
var sumEvens = 0;

for (var i = 1; i <= 150; i++) {
    sum += i;
    if(i%2 === 0){
        sumEvens += i;
    }
}

console.log('Сумма чисел от 1 до 150 = ', sum);
console.log('Сумма положительных чисел от 1 до 150 = ', sumEvens)