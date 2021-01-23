document.writeln('<pre>');
let role = 'admin';
let password = 'password'
let inputRole = prompt("Who is it?", '');

if (inputRole === 'admin') {
    let inputPassword = prompt("Password?", '');
    if (inputPassword === null) {
        document.writeln('Entry canceled')
    } else if (inputPassword === password) {
        document.writeln('Welcome')
    } else {
        document.writeln('Wrong password');
    }
} else {
    inputRole === null ? document.writeln('Entry canceled') : document.writeln('I don`t know you');
}

document.writeln('</pre>');