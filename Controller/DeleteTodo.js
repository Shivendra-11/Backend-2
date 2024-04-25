
//import th model
const Todo = require("../Models/Todo");

//define route handler

exports.DeleteTodo = async(req,res) => {
    try {
            // find by using id and delete 
            //step1) is to find id 
            const {id}=req.params;
            await Todo.findByIdAndDelete(id);
            res.json({
                success:true,
                message:"Todo DELETED",
            }) 
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
          success: true,
          error: err.message,
          message: "Server not Found",
    })
}
}

