const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

// Create the ToDo model
const ToDoModel = mongoose.model("ToDo", ToDoSchema);

// Export the ToDo model
module.exports = ToDoModel;
