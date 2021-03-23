//Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
//При клике на любую ячейку таблицы появляется внутри ячейке многострочное текстовое поле с текстом который 
//был в ячейке(на которую нажали) и две кнопки save, cancel save -- сохранить в текущей ячейке введенные 
//данные, cancel -- оставит все без изменений как было раньше.
const table = document.querySelector('#table');
const actions = {
    save(target) {
        let textArea = target.querySelector('textarea');
        target.innerHTML = textArea.value;
    },
    cancel(target) {
        let textArea = target.querySelector('textarea');
        target.innerHTML = textArea.dataset.oldval;
    }
}
table.addEventListener('click', createInput);

function createInput() {
    const target = event.target;
    if (target.tagName != 'TD' || (target.tagName == 'TD' && target.children.length != 0)) return;
    let fragment = createFragment(target);
    target.innerHTML = null;
    target.append(fragment);
}

function click(target) {
    const action = this.dataset.action;
    actions[action] && actions[action](target);
}

function createFragment(target){
    let fragment = document.createDocumentFragment();
    let textArea = createTextArea(target.innerHTML);
    var btns = Object.keys(actions).map(key => createBtn(key, target));
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

function createBtn(action, target) {
    let btn = document.createElement('button');
    btn.setAttribute(`data-action`, action);
    btn.innerHTML = action;
    btn.onclick = click.bind(btn, target);
    return btn;
}