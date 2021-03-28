window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        const { clientX, clientY } = e;
        event.preventDefault();
        setPosition(clientX, clientY);
        showMenuOn();
    });

    document.addEventListener("click", function (e) {
        showMenuOff(e.target);
    });

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
            li.addEventListener('mouseover', highlightMenuItemToggle);
            li.addEventListener('mouseleave', highlightMenuItemToggle);
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

    function showMenuOn() {
        contextMenu.classList.remove("hide");
    }

    function showMenuOff(target) {
        if (target != contextMenu) {
            contextMenu.classList.add("hide");
        }
    }

    function setPosition(clientX, clientY) {
        contextMenu.style.left = `${clientX}px`;
        contextMenu.style.top = `${clientY}px`;
    }

    function highlightMenuItemToggle() {
        this.classList.toggle("highlight");
    }
}