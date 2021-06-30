Vue.config.devtools = true;

new Vue(
    {
        el: '#box',
        data: {
            todoList: [
                'task n.1',
                'task n.2',
                'task n.3',
                'task n.4',
                'task n.5',
                'task n.6',
                'task n.7',
                'task n.8',
                'task n.9'
            ],
            newTask: '',
        },
        methods: {
            addNewTask: function () {
                this.todoList.push(this.newTask);
                this.newTask= '';
            },
            deleteTask: function (i) {
                this.todoList.splice(i, 1)
            }
        }
    }
);