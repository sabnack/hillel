// Создать контекстное меню при клике(event=contextmenu) на любое место в документе. Использую модель данных ниже(data):

//  data = { 
//  	name: 'menu', 
//  	items: [
//  		{
//  			title: 'title 1',
//  			handler: 'ActionCopy'
//  		},
//  		{
//  			title: 'title 2',
//  			handler: 'ActionSaveAs'
//  		},
//  		{
//  			title: 'title 3',
//  			handler: 'ActionExit' // названия метода из actions,
//  		}
//  	]
//  }
// Меотоды обработчиков событий хранить в объекте actions.

// Кликая(onclick) по пунктам меню(задание #1), вызываются метод из объекта actions (использовать своство handler) .

// actions = { actionCopy: function(){}, actionSaveAs: function(){}, actionExit: function() {} }

window.onload = function () {
    const actions = {
        actionCopy() {
            console.log('ActionCopy')
        },
        actionSaveAs() {
            console.log('ActionSaveAs')
        },
        actionExit() {
            console.log('ActionExit')
        }
    };

    const data = {
        name: 'menu',
        items: [
            { title: 'Copy', handler: 'actionCopy' },
            { title: 'SaveAs', handler: 'actionSaveAs' },
            { title: 'Exit', handler: 'actionExit' }
        ]
    }

    function MenuComponent(model = {}, actions = {}) {
        this.model = model;
        this.actions = actions;
    }

    MenuComponent.prototype.makeNavContainer = function () {
        const nav = document.createElement('nav');
        nav.setAttribute("id", "context_menu");
        nav.classList.add('menu_block', 'position', 'hide');
        return nav;
    };

    MenuComponent.prototype.makeUlContainer = function () {
        const ul = document.createElement('ul');
        ul.classList.add('navigation');
        return ul;
    };


    MenuComponent.prototype.makeButtons = function () {
        const { items } = this.model;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < items.length; i++) {
            const li = document.createElement('li');
            const { handler, title } = items[i];

            li.addEventListener('click', actions[handler]);
            li.classList.add("navigation__item");
            li.innerHTML = title;
            fragment.append(li);
        }

        return fragment;
    };


    MenuComponent.prototype.makeMenu = function () {
        const navContainer = this.makeNavContainer();
        const ulContainer = this.makeUlContainer();
        const menuButtons = this.makeButtons();
        ulContainer.append(menuButtons);
        navContainer.append(ulContainer);
        document.body.append(navContainer);
    }

    const menu = new MenuComponent(data, actions);
    menu.makeMenu();
    const contextMenu = document.querySelector('#context_menu');

    document.addEventListener("contextmenu", function (e) {
        const { clientX, clientY } = e;
        event.preventDefault();
        setPosition(clientX, clientY);
        showMenuOn();
    });

    document.addEventListener("click", function (e) {
        showMenuOff(e.target);
    });

    document.addEventListener("keyup", function (e) {
        if (e.keyCode === 27) {
            showMenuOff(e.target);
        }
    });
    
    function showMenuOn() {
        if (contextMenu) {
            contextMenu.classList.remove("hide");
        }
    }

    function showMenuOff(target) {
        if (contextMenu && target != contextMenu) {
            contextMenu.classList.add("hide");
        }
    }

    function setPosition(clientX, clientY) {
        if (contextMenu) {
            contextMenu.style.left = `${clientX}px`;
            contextMenu.style.top = `${clientY}px`;
        }
    }
}