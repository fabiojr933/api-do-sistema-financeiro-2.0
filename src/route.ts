import express from "express";
import CompanyController from './controllers/companyController';
import UserController from './controllers/userController';
import  authorization  from './middleware/authorization';
import BankController from './controllers/bankController';
import Expense_categoryController from "./controllers/expense_categoryController";
const route = express.Router();

const companyController = new CompanyController();
const userController = new UserController();
const bankController = new BankController();
const expense_categoryController = new Expense_categoryController();

//companyController
route.post('/company', authorization, companyController.create);
route.put('/company', authorization, companyController.update);
route.delete('/company', authorization, companyController.eliminate);
route.get('/company/:id', authorization, companyController.get);
route.get('/companyList',authorization, companyController.list);

//userController
route.post('/user', authorization, userController.create);
route.put('/user', authorization, userController.update);
route.delete('/user', authorization, userController.eliminate);
route.get('/user/:id', authorization, userController.get);
route.get('/userList', authorization, userController.list);
route.post('/user/authenticate', userController.authenticate);
route.get('/user/logoff', authorization, userController.logoff);

//bankController
route.post('/bank', authorization, bankController.create);
route.delete('/bank', authorization, bankController.eliminate);
route.get('/bank/:id', authorization, bankController.get);
route.get('/bankList', authorization, bankController.list);
route.put('/bank', authorization, bankController.update);

//expense_categoryController
route.post('/expenseCategory', authorization, expense_categoryController.create);
route.delete('/expenseCategory', authorization, expense_categoryController.eliminate);
route.get('/expenseCategory/:id', authorization, expense_categoryController.get);
route.get('/expenseCategoryList', authorization, expense_categoryController.list);
route.put('/expenseCategory', authorization, expense_categoryController.update);


export default route;