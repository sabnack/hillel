var array1 = createAndFillArray(10);
var array2 = createAndFillArray(10);
var array3 = [100, 32, 54, 'df', false, 200, 153];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(compareSumOfArrays(array2, array3), 'Max sum in array');
console.log(doMath(2, '/', 2));
console.log(mySplit("hello world", ['l', 'd']));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], isEven));

//напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.
//  var input = [1, 2, 3, 4, 5, 6];
//  function isEven(x) { return x % 2 == 0; } // проверяет на четность
//  console.log(filter(input, isEven)); // [2, 4, 6]
function filter(array, callback) {
    var arr = [];
    array.forEach(element => {
        if (callback(element)) {
            arr.push(element);
        }
    });
    return arr;
}

function isEven(x) {
    return x % 2 == 0;
}

//Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
//'func("hello world", ['l', 'd'])' вернет нам "heo wor"
function mySplit(string, delimiters) {
    delimiters.forEach(element => {
        string = string.split(element).join('');
    });
    return string;
}

//Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
//В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.
function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ^ y;
    }
}

//написать функцию, которая примет как аргумент(параметр) два массива 
//и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
function compareSumOfArrays(arr1, arr2) {
    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return [];
    }
    else {
        if (!Array.isArray(arr1) && Array.isArray(arr2)) {
            return arr2;
        }
        else if (!Array.isArray(arr2) && Array.isArray(arr1)) {
            return arr1;
        }
    }
    var sum1 = sumOfarray(arr1);
    var sum2 = sumOfarray(arr2);
    if (sum1 > sum2) {
        return arr1;
    }
    return arr2;
}

function sumOfarray(array) {
    var sum = 0;
    array.forEach(element => {
        if (!isNaN(element)) {
            sum += element;
        }
    });
    return sum;
}

//Написать функцию заполнения массива. Имя произвольное.
function createAndFillArray(lenght) {
    var arr = new Array(lenght);
    for (var i = 0; i < lenght; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}