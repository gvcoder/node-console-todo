#!/usr/bin/env node

const { addTodo, listTodos, removeTodo, completeTodo } = require('./todo');
const args = process.argv.slice(2);
const [command, ...rest] = args;

switch (command) {
    case 'add':
        addTodo(rest.join(' '));
        break;
    case 'list':
        listTodos();
        break;
    case 'remove':
        removeTodo(Number(rest[0]));
        break;
    case 'complete':
        completeTodo(Number(rest[0]));
        break;
    default:
        console.log('Usage:');
        console.log('  node index.js add <task>');
        console.log('  node index.js list');
        console.log('  node index.js remove <taskNumber>');
        console.log('  node index.js complete <taskNumber>');
}