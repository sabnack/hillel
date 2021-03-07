// Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.

// Есть герой person, класс Person(name, XPosition, YPosition)

// Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.

// Field имеет такие методы: 
//     * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
//     * clearField() - убирает героя с доски
//     * changeSize(newX, newY) - меняет размер поля

// Person имеет такие методы:
//     * start() - герой появляется на доске
//     * go(direction, step) - движение по переданом параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
//     * resetPosition() - перенос в начальную позицию

// Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.

// Вызов методов происходит из консоли.

// Суть такая:

// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
// последовательно вызываются команды, renderField - отображает новую доску в document. В результате мы должны увидеть 2 нарисованных состояния поля.
class Field {
    constructor(width = 10, height = 10) {
        this.width = width;
        this.height = height;
        this.clearField();
    }
}

Field.prototype.clearField = function(){
    this.field = new Array(this.height);
        for (let i = 0; i < this.height; i++){
            this.field[i] = new Array(this.height).fill(0);
        }
}

Field.prototype.renderField = function ()  {
    let hr = `<hr />`;
    let result = hr;
    for(let i=0; i < this.width; i++){
        result += `${this.field[i].join('')}<br>`;
    }
    document.write(`${result}${hr}`);
}

Field.prototype.changeSize = function(newX, newY) {
    this.width = newX;
    this.height = newY;
    this.clearField();
}

class Person{
    constructor(name, width, height){
        this.name = name;
        this.startXpos = Math.floor(Math.random() * Math.floor(height));
        this.startYpos = Math.floor(Math.random() * Math.floor(width));
        this.Xpos = this.startXpos;
        this.Ypos = this.startYpos;
    }
}

Person.prototype.start = function(field){
    field[this.Xpos][this.Ypos] = 1;
}

Person.prototype.go = function(direction, step, field){
    field[this.Xpos][this.Ypos] = 0;
    for(let i=1; i<=step; i++){
        switch (direction) {
            case 'left':
                if(this.Ypos == 0){
                    this.Ypos = field[this.Xpos].length-1;
                } else {
                    this.Ypos--;
                }
                break;
            case 'right':
                if(this.Ypos == field[this.Xpos].length-1){
                    this.Ypos = 0;
                } else {
                    this.Ypos++;
                }                
                break;
            case 'top':
                if(this.Xpos == 0){
                    this.Xpos = field[this.Ypos].length-1;
                } else {
                    this.Xpos--;
                }
                break;
            case 'bottom':
                if(this.Xpos == field[this.Ypos].length-1){
                    this.Xpos = 0;
                } else {
                    this.Xpos++;
                }
                break;
        }
    }
    console.log(this.Xpos, ' X');
    console.log(this.Ypos, ' Y');
    field[this.Xpos][this.Ypos] = 1;
}

Person.prototype.resetPosition = function(field){
    field[this.Xpos][this.Ypos] = 0;
    this.Xpos = this.startXpos;
    this.Ypos = this.startYpos;
    field[this.Xpos][this.Ypos] = 1;
}

let field = new Field();
let person = new Person('Jhon Doe',field.width, field.height);
person.start(field.field);
field.renderField();
person.go('bottom', 2, field.field);
field.renderField();
person.go('bottom', 2, field.field);
field.renderField();
person.resetPosition(field.field);
field.renderField();
console.log(field);