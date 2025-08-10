const { readTodos, writeTodos } = require('./storage');

function addTodo(task) {
    if (!task) {
        console.log('Error: Task description cannot be empty.');
        return;
    }
    const todos = readTodos();
    const newTodo = { task, completed: false };
    todos.push(newTodo);
    writeTodos(todos);
    console.log(`Added todo: "${task}"`);
}

function listTodos() {
    const todos = readTodos();
    if (todos.length === 0) {
        console.log('No todos found. Add one with "add <task>"!');
        return;
    }
    console.log('To-Do List:');
    todos.forEach((todo, index) => {
        const status = todo.completed ? '[x]' : '[ ]';
        console.log(`${index + 1}. ${status} ${todo.task}`);
    });
}

function removeTodo(taskNumber) {
    if (isNaN(taskNumber) || taskNumber <= 0) {
        console.log('Error: Please provide a valid task number to remove.');
        return;
    }
    const todos = readTodos();
    const index = taskNumber - 1;

    if (index >= todos.length) {
        console.log(`Error: Task ${taskNumber} does not exist.`);
        return;
    }

    const [removedTodo] = todos.splice(index, 1);
    writeTodos(todos);
    console.log(`Removed todo: "${removedTodo.task}"`);
}

function completeTodo(taskNumber) {
    if (isNaN(taskNumber) || taskNumber <= 0) {
        console.log('Error: Please provide a valid task number to complete.');
        return;
    }
    const todos = readTodos();
    const index = taskNumber - 1;

    if (index >= todos.length) {
        console.log(`Error: Task ${taskNumber} does not exist.`);
        return;
    }

    if (todos[index].completed) {
        console.log(`Task ${taskNumber} is already marked as complete.`);
        return;
    }

    todos[index].completed = true;
    writeTodos(todos);
    console.log(`Completed todo: "${todos[index].task}"`);
}

module.exports = { addTodo, listTodos, removeTodo, completeTodo };