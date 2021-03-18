let inputRange = document.querySelector('#slider');
let inputNumber = document.querySelector('#number');
let diagramm = document.querySelector('#diagramm');
let green = document.querySelector('.green');
let red = document.querySelector('.red');
const max = +prompt('Введите максимальное значение', 100);
inputRange.max = max;
inputNumber.value = inputRange.value;


inputRange.oninput = () => {
    inputNumber.value = inputRange.value;
    updateDivs(inputRange.value);
}
inputNumber.oninput = () => {
    inputRange.value = inputNumber.value;
    updateDivs(inputNumber.value);
}

const memoizedCommission = memoize(getCommission);

diagramm.style.height = `${inputRange.max * 1.08}px`;
green.style.height = `${inputRange.value}px`;
red.style.height = `${memoizedCommission(inputRange.value)}px`;

function memoize(fn) {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

function getCommission(value) {
    if (value <= max * 0.2) {
        return value * 0.02;
    } else if (value > max * 0.2 && value <= max * 0.5) {
        return value * 0.04;
    } else if (value > max * 0.5 && value <= max * 0.75) {
        return value * 0.06;
    } else {
        return value * 0.08;
    }
}

function updateDivs(value) {
    green.style.height = `${value}px`;
    red.style.height = `${memoizedCommission(value)}px`;
}