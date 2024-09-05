
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});


const todoList = mongoose.model("todo", todoSchema);

module.exports = todoList;
