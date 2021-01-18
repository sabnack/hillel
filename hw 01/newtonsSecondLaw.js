document.writeln('<pre>',stars);
let force = +prompt("Введите F", '15');
let mass = +prompt("Введите m", '80');
let acceleration = force / mass;
document.writeln('Ускорение тела при силе F = ' + force + ' и массе  m = ' + mass);
document.writeln(lines);
document.writeln('a = ' + acceleration);
document.writeln(lines)
document.writeln('end.</pre>');