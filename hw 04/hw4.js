// В двумерном массиве A размером n(рядов) на m(столбцов). Заполнить случайными числами.
// Найти ряд, где сумма элементов наименьшая
// Найти ряд, где сумма элементов найбольшая
// Поменять ряды местами (1 и 2 пункт)
var n = 5,
    m = 6,
    array = [],
    minSum = 0,
    maxSum = 0,
    minSumIndex,
    maxSumIndex;

for (var i = 0; i < n; i++) {
    array[i] = [];
    for (var j = 0; j < m; j++) {
        array[i][j] = Math.round(Math.random() * 100);
    }
    var sum = array[i].reduce((sum, current) => sum + current, 0);
    if (minSum > sum || i === 0) {
        minSum = sum;
        minSumIndex = i;
    }

    if (maxSum < sum) {
        maxSum = sum;
        maxSumIndex = i;
    }
}

console.log(array[minSumIndex], ' minSum = ' + minSum + ' Min index = ' + minSumIndex);
console.log(array[maxSumIndex], ' maxSum = ' + maxSum + ' Max index = ' + maxSumIndex);

var swap = array[maxSumIndex];
array[maxSumIndex] = array[minSumIndex];
array[minSumIndex] = swap;

// Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.
console.log(array);
minSum = maxSum = 0;
for (var j = 0; j < m; j++) {
    for (var i = 0, sum = 0; i < n; i++) {
        sum += array[i][j];
    }

    if (minSum > sum || j === 0) {
        minSum = sum;
        minSumIndex = j;
    }

    if (maxSum < sum) {
        maxSum = sum;
        maxSumIndex = j;
    }
}

console.log('MinSum Column = ' + minSum + ' index = ', minSumIndex);
console.log('MaxSum Column = ' + maxSum + ' index = ', maxSumIndex);

// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд
// Если массив непарный - последний элемент не трогать.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length - 1; i += 2) {
    var tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
}
console.log(arr);

//Реализовать скрипт который получает номер n, и возвращает число Фибоначчи по этому номеру.
var fibonacci = [0, 1],
    n = 10,
    F;
for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
F = fibonacci[n];
console.log(fibonacci);
console.log(F);
// или так

var x = 1,
    F = 0;
for (var i = 0; i < n; i++) {
    x += F;
    F = x - F;
}
console.log(F);

