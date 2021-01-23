let a = +prompt('Enter number A:', '');
let b;

do {
    b = +prompt('Enter number B:', '');
    if (b < a) {
        console.log('Number B must be greater than A')
    }
} while (a > b)

for (var i = a; i <= b; i++) {
    if (i % 2 === 0) {
        console.log(i ** 2, i + '^2');
    }
}

let number = +prompt('Enter number:', '');
let isPrime = true;

if (number === 0 || number === 1) {
    number === 0 ? console.log(number + ' is not a natural number') : console.log(number + ' is multiplicative unit');
} else {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    isPrime ? console.log(number + ' is prime') : console.log(number + ' is not prime');
}
