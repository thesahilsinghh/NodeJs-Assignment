import express from "express";
import userRouter from "./src/features/user/route/userRoute.js";

let app = express();

//setup
app.use(express.json());

//route
app.use("/app/form/", userRouter);
//exporting to server
export default app;
