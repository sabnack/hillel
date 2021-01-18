console.clear();
console.log('Список студентов зарегестрировавшихся на вебинар:')
console.log(stars);
let firstStudent = prompt("Возраст", '20') + ' лет ' + prompt("Имя", 'Вася') + ' ' + prompt('Фамилия', 'Иванов');
console.log('1. ', firstStudent);
let secondStudent = prompt("Возраст", '17') + ' лет ' + prompt("Имя", 'Олег') + ' ' + prompt('Фамилия', 'Пупкин');
console.log('2. ', secondStudent);
let thirdStudent = prompt("Возраст", '19') + ' лет ' + prompt("Имя", 'Даня') + ' ' + prompt('Фамилия', 'Капралов');
console.log('3. ', thirdStudent);
console.log(lines, ' Средний возраст студента: ', (parseInt(firstStudent) + parseInt(secondStudent) + parseInt(thirdStudent)) / 3, ' ', lines);
console.log(stars);
