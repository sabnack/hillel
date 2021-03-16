let inputRange = document.querySelector('#slider');
let inputNumber = document.querySelector('#number');
let diagramm = document.querySelector('#diagramm');
const max = +prompt('Введите максимальное значение', 100);
inputRange.max = max;
inputNumber.value = inputRange.value;
inputRange.addEventListener('input', updateInput);
inputNumber.addEventListener('input', updateInput);
initDivs(diagramm);

function initDivs(diagramm) {
    diagramm.style.display = 'flex';
    diagramm.style.flexDirection = 'column-reverse';
    diagramm.style.width = '50px';
    diagramm.style.height = `${inputRange.max * 1.08}px`;
    diagramm.style.border = '1px solid black';
    diagramm.firstElementChild.style.backgroundColor = 'green';
    diagramm.firstElementChild.style.height = `${inputRange.value}px`;
    diagramm.lastElementChild.style.backgroundColor = 'red';
    diagramm.lastElementChild.style.height = `${getCommission(inputRange.value)}px`;
}

function updateInput() {
    let sibling = this.nextElementSibling == null ? this.previousElementSibling : this.nextElementSibling;
    sibling.value = this.value;
    updateDivs(this.value);
}

function updateDivs(value) {
    diagramm.firstElementChild.style.height = `${value}px`;
    diagramm.lastElementChild.style.height = `${getCommission(inputRange.value)}px`;
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