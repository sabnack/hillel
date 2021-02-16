//Вывести в консоль последовательность чисел в обратном порядке, используя рекурсивный вызов функиции
//row (5) // 5 4 3 2 1

function reverse(n) {
    if (n != 0) {
        console.log(n);
        reverse(--n);
    }
}

reverse(10);

// Написать рекурсивную функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6

function sumTo(n) {
    return n != 0 ? n + sumTo(--n) : n;
}
console.log("Sum = ", sumTo(4));

//Написать функция factorial(n) - которая при помощи рекурсии будет считать значение факториала числа n!
function factorial(n) {
    return n != 1 ? n * factorial(--n) : n;
}
console.log("Factorial = ", factorial(20));

//"Попробывать" заполнить вот такой массив при помощи циклов: new Array(new Array(4), new Array(3), new Array(new Array(6), new Array(4)));

var arr = new Array(new Array(4), new Array(3), new Array(new Array(new Array(2), new Array(4)), new Array(4)));

function fill(arr) {
    for (var i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? fillSubArray(arr[i]) : arr[i] = rand();
    }
    return arr;
}

function fillSubArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? fillSubArray(arr[i]) : arr[i] = rand();
    }
}

function rand() {
    return Math.round(Math.random() * 100);
}

var res1 = fill(arr.slice());
console.log(res1);

// рекурсия
function fillRecursive(arr) {
    for (var i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? fillRecursive(arr[i]) : arr[i] = rand();
    }
}
console.log(arr);