window.onload = function () {
    Vue.component('diagram-item', {
        model: {
            prop: 'height',
            event: 'change'
        },
        props: {
            height: Number,
            color: String,
            id: Number,
        },
        template: '#column',
        methods: {
            change: function (event) {
                let value = +event.target.value;
                this.saveToLocatlStorage(value);
                this.$emit('change', value)
            },
            saveToLocatlStorage(value) {
                let item = JSON.parse(localStorage.getItem(`${this.$parent.itemIdString}${this.id}`));
                item.height = value;
                localStorage.setItem(`${this.$parent.itemIdString}${this.id}`, JSON.stringify(item));
            }
        }
    });

    const app = new Vue({
        el: '#diagrams',
        data: {
            items: [],
            itemIdsString: 'ItemIds',
            itemIdString: 'Item-'
        },
        mounted: function () {
            let ids = JSON.parse(localStorage.getItem(this.itemIdsString));
            if (ids === null) {
                ids = [];
                for (let i = 0; i < 8; i++) {
                    ids.push(i);
                    let color = this.getRandomColor();
                    let height = this.getRandomInt(100, 300);
                    let obj = { id: i, height: height, color: color };
                    this.items.push(obj);
                    localStorage.setItem(`${this.itemIdString}${i}`, JSON.stringify(obj));
                }
                localStorage.setItem(this.itemIdsString, JSON.stringify(ids));
            }
            else {
                ids.forEach(id => {
                    this.items.push(JSON.parse(localStorage.getItem(`${this.itemIdString}${id}`)));
                });
            }

        },
        methods: {
            getRandomInt: function (min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
            },
            getRandomColor: function () {
                return `#${(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)}`;
            },
            sort: function () {
                let ids = this.items.sort((a, b) => (a.height > b.height) ? 1 : -1).map(x => x.id);
                localStorage.setItem(this.itemIdsString, JSON.stringify(ids));
            }
        }

    })
};