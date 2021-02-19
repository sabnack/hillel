var uniqueInOrder = function (iterable) {
    var splitStr = Array.isArray(iterable) ? iterable : iterable.split('');
    if (splitStr.length === 0) return [];
    var res = [splitStr[0]];
    for (var i = 1; i < splitStr.length; i++)
        if (res[res.length - 1] !== splitStr[i]) {
            res.push(splitStr[i]);
        }
    return res;
}
uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcAD');
uniqueInOrder([1, 2, 2, 3, 3]);
console.log(uniqueInOrder([]));
//----------------------------------------------
function addBinary(a, b) {
    return (a + b).toString(2);
}
console.log(addBinary(1, 2));
//----------------------------------------------
function order(words) {
    if (words.length === 0) {
        return "";
    }

    var splitStr = words.split(' ');
    var length = splitStr.length;
    var res = [];

    for (var j = 1; j <= length; j++) {
        for (var i = 0; i < length; i++) {
            if ((splitStr[i]).includes(j)) {
                res.push(splitStr[i]);
            }
        }
    }
    return res = res.join(' ');
}
order("is2 Thi1s T4est 3a");
console.log(order("is2 Thi1s T4est 3a"));
//----------------------------------------------

function disemvowel(str) {
    var vowels = "aeiou";
    var res = [];
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            res.push(str[i]);
        }
    }
    return res.join('');
}
console.log(disemvowel("This website is for losers LOL!"));

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
//----------------------------------------------
function XO(str) {
    var x = 0;
    var o = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x++;
        } else if (str[i].toLowerCase() === 'o') {
            o++;
        }
    }
    return x === o;
}
console.log(XO("zzoo"));
function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
console.log(XO2("zzoo"));
//----------------------------------------------
function validatePIN(pin) {
    return /^[0-9]+$/.test(pin) && (pin.length === 4 || pin.length === 6);
}
console.log(validatePIN("-234"), "-234");
console.log(validatePIN("1234"), "1234");
console.log(validatePIN("-1.234"), "-1.234");
console.log(validatePIN(".234"), ".234");
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }