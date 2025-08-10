const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'todos.json');

function readTodos() {
    try {
        if (!fs.existsSync(DB_FILE)) {
            return [];
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading from storage:', error);
        return [];
    }
}

function writeTodos(todos) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(todos, null, 2));
    } catch (error) {
        console.error('Error writing to storage:', error);
    }
}

module.exports = { readTodos, writeTodos };
