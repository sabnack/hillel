// // 1
// var array = [1, 2, 3, 4, 5];
// var stringArray = '<pre>' + array.join('_') + '</pre>';
// document.writeln(stringArray);
// // 2
// var array = [6, 7, 2, 3, 5, 7];
// var stringArray = '<pre><ul>';
// for (var i = 0; i < array.length; i++) {
//     stringArray += '<li>' + array[i] + '</li>';
// }
// stringArray += '</ul></pre>';
// document.writeln(stringArray);
// // 3
// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array);
// var delIndex = array.length / 2,
//     delCount = 2;
// array.length % 2 === 0 ? delIndex -= 1 : delCount -= 1;
// array.splice(delIndex, delCount);
// console.log(array);
// // 4
// var array = [1, 2, 3];
// var input;
// do {
//     input = prompt('Enter value: ', '');
//     array.push(input);
// } while (input !== '&')
// console.log(array);
