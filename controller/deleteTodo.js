const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the Todo by ID
        const todo = await Todo.findByIdAndDelete(id);

        // If no Todo is found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found."
            });
        }

        // Return success response
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};
