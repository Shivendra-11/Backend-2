//import th model
const Todo = require("../Models/Todo");

//define route handler
// it is used to gat all the data from the database mongoose ncompass
exports.getTodo=async(req,res)=>{
    try{
        // fetch all todo items from database;
        const todos=await Todo.find({});
        // response
        res.status(500).json({
            success:true,
            data:todos,
            message:"Entire Todo Darta is fetched",
        });

    }
    catch(error)
    {

        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error",
        });

    }
}

// to get only one data object we use unique id 
exports.getTodoById=async (req,res)=>{
    try{
// extract  todo item basis on id 
const id=req.params.id;
// return that todo item where _id is named as id
const todo=await Todo.findById({_id:id});
// data for given id is not found
if(!todo){
    return res.status(404).json({
        success:false,
        message:"No data found with Givem id"
    })
}
    // if data is found
    res.status(200).json({
        success:true,
        data:todo,
        message:`TOdo data is found ${id}  `,
    })

}
    catch(error){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
            
        });

    }
}