window.onload = () => {
    Vue.component('todo-item', {
        props: ['todo'],
        template: '#list'
    });
    const app = new Vue({
        el: '#TaskManager',
        data: {
            firstList: ['firstList-1', 'firstList-2', 'firstList-3', 'firstList-4', 'firstList-5'],
            secondList: ['secondList-1', 'secondList-2', 'secondList-3', 'secondList-4', 'secondList-5'],
        },
        methods: {
            transfer: function (direction) {
                let first = direction ? this.firstList : this.secondList;
                let second = direction ? this.secondList : this.firstList;
                let task = first.pop();
                if (task) {
                    second.unshift(task);
                }
            }
        }
    })
};