let expenseController=require('./expense');
let express=require('express');

let routes=express.Router();

routes.post('/add-expense',expenseController.addExpense);
routes.get("/get-expenses", expenseController.getExpense);
routes.post("/delete/:id", expenseController.deleteExpense);


module.exports=routes;
