const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../Controller/CreateTOdo");
const {getTodo, getTodoById} = require("../Controller/getTodo");
const { UpdateTodo } = require("../Controller/UpdatTodo");
const { DeleteTodo } = require("../Controller/DeleteTodo");



//define APi routes
router.post("/CreateTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/UpdateTodo/:id",UpdateTodo);
router.delete("/DeleteTodo/:id",DeleteTodo);


module.exports = router;