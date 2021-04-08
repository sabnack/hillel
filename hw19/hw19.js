//Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
//При клике на любую ячейку таблицы появляется внутри ячейке многострочное текстовое поле с текстом который 
//был в ячейке(на которую нажали) и две кнопки save, cancel save -- сохранить в текущей ячейке введенные 
//данные, cancel -- оставит все без изменений как было раньше.
const table = document.querySelector('#table');
const actions = {
    save(parent) {
        let textArea = parent.querySelector('textarea');
        parent.innerHTML = textArea.value;
    },
    cancel(parent) {
        let textArea = parent.querySelector('textarea');
        parent.innerHTML = textArea.dataset.oldval;
    }
}
table.addEventListener('click', click);

function click() {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        clickBtnControl(target);
    } else if (target.tagName == 'TD' && target.children.length == 0) {
        createInput(target);
    }
}

function createInput(target) {
    let fragment = createFragment(target);
    target.innerHTML = null;
    target.append(fragment);
}

function clickBtnControl(target) {
    const action = target.dataset.action;
    actions[action] && actions[action](target.parentElement);
}

function createFragment(target) {
    let fragment = document.createDocumentFragment();
    let textArea = createTextArea(target.innerHTML);
    var btns = Object.keys(actions).map(key => createBtn(key));
    fragment.append(textArea);
    btns.forEach(btn => fragment.append(btn));
    return fragment;
}

function createTextArea(value) {
    let textArea = document.createElement('textarea');
    textArea.setAttribute(`data-oldval`, value);
    textArea.value = value;
    return textArea;
}

function createBtn(action) {
    let btn = document.createElement('button');
    btn.setAttribute(`data-action`, action);
    btn.innerHTML = action;
    return btn;
}