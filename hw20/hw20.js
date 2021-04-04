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
        this.contextMenu = {};
    }

    MenuComponent.prototype.makeNavContainer = function () {
        const div = document.createElement('div');
        div.setAttribute("id", "context_menu");
        div.classList.add('menu_block', 'position', 'hide');
        return div;
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

    MenuComponent.prototype.openMenu = function (e) {
        const { clientX, clientY } = e;
        event.preventDefault();
        this.setPosition(clientX, clientY);
        this.showMenuOn();
    }

    MenuComponent.prototype.showMenuOn = function () {
        if (this.contextMenu) {
            this.contextMenu.classList.remove("hide");
        }
    }

    MenuComponent.prototype.setPosition = function (clientX, clientY) {
        let width =  this.contextMenu.clientWidth;
        let heigth =  this.contextMenu.clientHeight;
        let offSetX = window.innerWidth - width;
        let offsetY = window.innerHeight - heigth;

        if (clientX > offSetX) {
            clientX = offSetX;
        }

        if (clientY > offsetY) {
            clientY = offsetY;
        }

        if ( this.contextMenu) {
            this.contextMenu.style.left = `${clientX}px`;
            this.contextMenu.style.top = `${clientY}px`;
        }
    }

    MenuComponent.prototype.showMenuOff = function (target) {
        if (this.contextMenu && target != this.contextMenu) {
            this.contextMenu.classList.add("hide");
        }
    }

    MenuComponent.prototype.makeMenu = function () {
        const navContainer = this.makeNavContainer();
        const ulContainer = this.makeUlContainer();
        const menuButtons = this.makeButtons();
        ulContainer.append(menuButtons);
        navContainer.append(ulContainer);

        document.addEventListener("contextmenu", this.openMenu.bind(this));

        document.addEventListener("click", this.showMenuOff.bind(this));

        document.addEventListener("keyup", function (e) {
            if (e.keyCode === 27) {
                this.showMenuOff(e.target);
            }
        });

        document.body.append(navContainer);
        this.contextMenu = document.querySelector('#context_menu');
    }

    const menu = new MenuComponent(data, actions);
    menu.makeMenu();
}