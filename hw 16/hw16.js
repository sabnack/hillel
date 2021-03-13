const elements = document.querySelectorAll('input');
for(let element of elements){
    setInterval(timer.bind(element), 2000);
}

function timer() {    
    let textArea = document.getElementById('text-area');
    let res = textArea.value;
    textArea.value = `${res} , ${this.value}`;
}