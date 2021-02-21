//Cоздать глобальную ф-ю greeting которая каждые 5000ms смотри в тег input с id='name' 
//(получить при помощи document.querySelector('input[id="name"]')) берет значение по
// ключу value и выводит сообщение преведствия из глобальной переменной greetingMessage.
//alrt(greetingMessage + input.value)
var greetingMessage = 'Hello ';
var input = document.querySelector('input[id="name"]');

function greeting() {
    alert(greetingMessage + this.value);
}

var x = 0;

setTimeout(greeting.bind(input), 3000);

// Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.
// list.myPush(); list.myJoin(); list.myReverse();
// Например: var list = [1, 2, 3];
// function myPush() { ... }
// list.myPush = myPush;
// list.myPush();
var list = [];
list.myPush = myPush;

function myPush(value) {
    if (value) {
        this[this.length] = value;
    }
}

list.myPush();
list.myPush(1);
list.myPush(2);
list.myPush(3);
list.myPush(4);
console.log(list);

var list2 = ['1', '2', '3', '4', '5', '6'];
list2.myJoin = myJoin;
list2.myReverse = myReverse;

function myJoin(separator) {
    if (this.length === 0) {
        return '';
    }

    var res = this[0];
    for (var i = 1; i < this.length; i++) {
        res = res + separator + this[i];
    }
    return res;
}
console.log(list2.myJoin('-'));

function myReverse() {
    for (var i = 0; i < this.length / 2; i++) {
        var tmp = this[this.length - 1 - i];
        this[this.length - 1 - i] = this[i];
        this[i] = tmp;
    }
}

list2.myReverse();

console.log(list2);