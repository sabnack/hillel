function Counter() {
    const counterIdsStr = 'counterIds';
    const counterStr = 'counter';
    const spanStr = 'span';
    const btnsStr = 'buttons';

    this.getterBtnsStr = () => { return btnsStr; }
    this.getterSpanStr = () => { return spanStr; }
    this.getterCounterStr = () => { return counterStr; }
    this.getterCounterIds = () => { return counterIdsStr; }
}

Counter.prototype.makeContainer = function (id, className) {
    const div = document.createElement('div');
    id && div.setAttribute("id", id);
    className && div.classList.add(className);
    return div;
};

Counter.prototype.makeSpan = function (id, value) {
    const span = document.createElement('span');
    span.innerText = value ?? 0;
    span.setAttribute("id", this.getStringId(this.getterSpanStr(), id));
    return span;
};

Counter.prototype.makeClickButton = function (text, id, func) {
    const btn = document.createElement('button');
    btn.innerText = text;
    id && (btn.dataset.id = id);
    btn.addEventListener("click", func);
    return btn;
};

Counter.prototype.incrementCounter = function (e) {
    let id = e.target.dataset.id;
    let counter = +localStorage.getItem(this.getStringId(this.getterCounterStr(), id));
    counter++;
    this.setValue(id, counter);
};

Counter.prototype.getStringId = function (name, id) {
    return `${name}-${id}`;
}

Counter.prototype.addCounter = function () {
    let ids = this.getCountersIds() ?? [];
    let id = ids.length + 1;
    ids.push(id);
    localStorage.setItem(this.getterCounterIds(), JSON.stringify(ids));
    let counterContainer = this.makeCounter(id, 0);
    let buttons = document.getElementById(this.getterBtnsStr());
    buttons.prepend(counterContainer);
}

Counter.prototype.makeCounter = function (id, value) {
    const counterContainer = this.makeContainer(this.getStringId(this.getterCounterStr(), id), 'counter');
    const span = this.makeSpan(id, value);
    const incrementBtn = this.makeClickButton('+', id, this.incrementCounter.bind(this));
    counterContainer.append(span);
    counterContainer.append(incrementBtn);
    return counterContainer;
}

Counter.prototype.clearCounters = function () {
    let ids = this.getCountersIds();
    ids.forEach(id => {
        localStorage.setItem(this.getStringId(this.getterCounterStr(), id), 0);
        document.getElementById(this.getStringId(this.getterSpanStr(), id)).innerText = 0;
    });
}

Counter.prototype.setCounter = function () {
    let id = +prompt('Введите Id:', 1);
    let ids = this.getCountersIds();
    if (ids.includes(id)) {
        let value = +prompt('Введите Значение:', 1);
        this.setValue(id, value);
    } else {
        alert('Неверный Id');
    }
}

Counter.prototype.setValue = function (id, value) {
    value = isNaN(value) ? 0 : value;
    localStorage.setItem(this.getStringId(this.getterCounterStr(), id), value);
    document.getElementById(this.getStringId(this.getterSpanStr(), id)).innerText = value;
}

Counter.prototype.getCountersIds = function () {
    return JSON.parse(localStorage.getItem(this.getterCounterIds()));
}

Counter.prototype.makeСontrolBtns = function () {
    const btnContainer = this.makeContainer(this.getterBtnsStr(), this.getterBtnsStr());
    const addBtn = this.makeClickButton('Add', null, this.addCounter.bind(this));
    const clearBtn = this.makeClickButton('Clear', null, this.clearCounters.bind(this));
    const setBtn = this.makeClickButton('Set', null, this.setCounter.bind(this));
    btnContainer.append(addBtn, clearBtn, setBtn);
    return btnContainer;
}

Counter.prototype.initCounters = function () {
    let ids = this.getCountersIds();
    const container = this.makeContainer(null, 'counters');
    const fragment = document.createDocumentFragment();

    if (ids != null) {
        ids.forEach(id => {
            let counter = localStorage.getItem(this.getStringId(this.getterCounterStr(), id));
            fragment.append(this.makeCounter(id, counter));
        });
    }
    const btnContainer = this.makeСontrolBtns();
    container.append(fragment, btnContainer);
    document.body.append(container);
}

const menu = new Counter();
menu.initCounters();