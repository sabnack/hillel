const elements = document.querySelectorAll('input');
const textArea = document.getElementById('text-area');
setInterval(timer.bind(elements), 2000);

function timer() {
    let res = [];
    for (let element of this) {
        if (element.value) {
            res.push(element.value);
        }
    }
    textArea.value = res.join(',');
}