//Пусть есть объект obj = {anonim: {say: 'Hello anonim'}, user: {say: 'Hello user'}, admin: {say: 'Hello admin'}}, и ф-я: function greeting(role) {}
//obj.greeting('admin'); // 'Hello admin' obj.greeting('user'); // 'Hello user'
//при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, с одним из 3ьох значений "anonim, admin, user". Получить в ответ сообщение приветствия.
var obj = {
    anonim: { say: 'Hello anonim' },
    user: { say: 'Hello user' },
    admin: { say: 'Hello admin' }
}

function greeting(role) {
    console.log(this[role]['say']);
}
greeting.call(obj, "admin");
greeting.call(obj, "user");
greeting.call(obj, "anonim");

// Пусть дан следующий код:
// var user = {name: 'Алексей'}
// function func(surname, patronymic) { alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }
// func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'
// при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров' 'Алексеевич', 'Петров' должно быть параметрами ф-ии.
var user = { name: 'Алексей' };

function func(surname, patronymic) {
    console.log('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
}

func.apply(user, ['Петров', 'Алексеевич']);

// Cоздать конвертер-функцию которая получает на вход массив вида:
// mass = [ [1,2,3, [3.1] ], 4, [ 5, 6, [7, 8, [9, 10, 15]]] ];
// а на выходе получим переобразованый массив: [1 ,2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 15]
arr = [[1, 2, 3, [3.1]], 4, [5, 6, [7, 8, [9, 10, [11, 12, 13, 14], 15]]]];
function converter(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(converter(val)) : acc.concat(val), []);
}
console.log(converter(arr));