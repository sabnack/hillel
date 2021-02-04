//Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет,
//есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать 
//текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']), 'inArray');

function inArray(string, array) {
    if (array.indexOf(string) === -1) {
        return false;
    }
    return true;
}

//Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта 
//и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
var obj1 = {
    key1: 12,
    key2: 'string',
    key3: 11
};

var obj2 = {
    key4: 12,
    key2: 'string2',
    key5: 54
};

var obj3 = {
    key6: 22,
    key7: 'string3',
    key8: 574
};
var obj4 = {
    key9: 2,
    key10: 'string22',
    key11: 4
};
function assignObjects(obj1, obj2) {
    var res = {};
    copyObj(res, obj1);
    copyObj(res, obj2);
    return res;
}

function copyObj(obj1, obj2) {
    for (var key in obj2) {
        obj1[key] = obj2[key];
    }
}

console.log(assignObjects(obj1, obj2));

//В задачу п.2 добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии 
//свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
//В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.
function assignObjects2(obj1, obj2, flag = false) {
    var res = {};
    if (flag) {
        copyObj(res, obj2);
        copyObj(res, obj1);
    }
    else {
        copyObj(res, obj1);
        copyObj(res, obj2);
    }
    return res;
}
console.log(assignObjects2(obj1, obj2));

//Адаптировать функцию assignObjects() под неопределенное количество объектов. assignObjects(obj1, obj2, ....., objn);
function assignObjects3() {
    var res = {};
    for (var i = 0; i < arguments.length; i++) {
        copyObj(res, arguments[i]);
    }
    return res;
}
console.log(assignObjects3(obj1, obj2, obj3, obj4));