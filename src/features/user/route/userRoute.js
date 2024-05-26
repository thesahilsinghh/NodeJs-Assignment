import express from "express";
import { formValidator } from "../../../middlewares/formValidation.middleware.js";
import UserController from "../controller/userController.js";
import sequelize from "../model/database.js";

let userRouter = express();

//intance of userController
let userController = new UserController();

sequelize
  .sync()

  .catch((err) => {
    console.error("Unable to sync database:", err);
  });


//Routing after localhost:3200/app/form
userRouter.route("/").post(userController.createForm);
userRouter.route("/fill_data").post(formValidator, userController.addToForm);
userRouter.route("/fill_data").get(userController.getData);



export default userRouter;
