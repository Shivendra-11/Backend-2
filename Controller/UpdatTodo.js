const Todo = require("../Models/Todo");

exports.UpdateTodo = async (req, res) => {
  try {
    // now we update the things by using id
    // findById and update
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: true,
      error: err.message,
      message: "Server not Found",
    });
  }
};
