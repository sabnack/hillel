document.writeln('<pre>');
let role = 'admin';
let password = 'password'
let inputRole = prompt("Who is it?", '');
if (inputRole === 'admin') {
    let inputPassword = prompt("Password?", '');
    inputPassword === null ? document.writeln('Entry canceled') : inputPassword === password ? document.writeln('Welcome') : document.writeln('Wrong password');
}
else {
    inputRole === null ? document.writeln('Entry canceled') : document.writeln('I don`t know you');

}
document.writeln('</pre>');