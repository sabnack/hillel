// Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. 
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, 
// сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через 
// метод input() класса SuperMath. Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. 
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия
// p = new SuperMath(); p.check(obj); // --> no p.input() -> 3 prompt -> считает
this.obj = {
    X: 12,
    Y: 3,
    sign: "/"
}
class SuperMath {
    constructor() {
        this.signs = ['+', '-', '/', '*', '%'];
        this.obj = {}
    }
}

SuperMath.prototype.input = function(){
    this.obj.X = +prompt('Введите число X: ',0);
    this.obj.Y = +prompt('Введите число Y: ',0);
    let sign;
    do {
        sign = prompt('Введите знак ');
    } while (sign.length != 1 || this.signs.indexOf(sign) == -1)
    this.obj.sign = sign;
}

SuperMath.prototype.check = function(obj){
    if (confirm(`${obj.X} ${obj.sign} ${obj.Y}?`)) {
        switch (obj.sign) {
            case '+':
                return obj.X + obj.Y;
            case '-':
                return obj.X - obj.Y;
            case '/':
                if (obj.Y === 0) {
                    alert('Делить на ноль нельзя!');
                    return undefined;
                } else {
                    return (obj.X / obj.Y);
                }
            case '*':
                return (obj.X * obj.Y);
            case '%':
                return (obj.X % obj.Y);
        }
    }
    else {
        this.input()
        return this.check(this.obj);
    }
}

let p = new SuperMath();
alert(p.check(obj));