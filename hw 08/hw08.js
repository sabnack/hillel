//1)Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), 
//которая описана в window. При вызове метода obj.renderObject() -> выводит в document всё 
//содержимое объекта, кроме самого метода renderObject
var obj = {
    x: 10,
    y: 20,
    z: 30,
    renderObject: renderObject
}

function renderObject() {
    for (var key in this) {
        if (key !== renderObject.name) {
            console.log(key + '=' + this[key]);
        }
    }
}
obj.renderObject();
console.log("---------------");

//2)Реализовать объект с методами m1(), m2(), m3(). Должна быть возможность выполнять подобный код:
//  obj.m1().m2().m3();
//  obj.m2().m1().m3();
//  obj.m2().m1().m3().m1().m1();
var obj = {
    m1: function () {
        console.log("from " + arguments.callee.name);
        return this;
    },
    m2: function () {
        console.log("from " + arguments.callee.name);
        return this;
    },
    m3: function () {
        console.log("from " + arguments.callee.name);
        return this;
    }
}

obj.m1().m2().m3();
console.log("---------------");
obj.m2().m1().m3();
console.log("---------------");
obj.m2().m1().m3().m1().m1();
console.log("---------------");

//3,4) в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.
// data = {
//     addRecord: function(){},
//     p: 600,
//     str: 'hello',
//     y: -50
// }
// data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
// data.x // 50
// data.y // 20
// data.z // 30
// data.p // 600
// data.str // 'hello'

//В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет 
//присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this, 
//если false - берется свойство из arguments. По умолчанию flag = false;

var data = {
    addRecord: addRecord,
    p: 600,
    str: 'hello',
    y: -50
}

function addRecord() {
    var flag = !(typeof arguments[arguments.length - 1] === "object");
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if ((this.hasOwnProperty(key) && !flag) || !this.hasOwnProperty(key)) {               
                this[key] = arguments[i][key];
            } 
        }
    }
}

data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 }, true);
console.log(data);
console.log("---------------");


