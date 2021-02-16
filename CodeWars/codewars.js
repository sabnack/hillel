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