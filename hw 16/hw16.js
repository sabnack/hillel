const elements = document.querySelectorAll('input');
const textArea = document.getElementById('text-area');
setInterval(timer.bind(elements), 2000);

function timer() {
    for (let element of this) {
        if (element.value) {
            textArea.value? textArea.value += ',' : '';
            textArea.value += element.value;
        }
    }
}