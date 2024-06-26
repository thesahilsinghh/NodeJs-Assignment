import express from "express";
import userRouter from "./src/features/user/route/userRoute.js";

let app = express();

//setup
app.use(express.json());

//route
app.use("/app/form/", userRouter);

app.use("", (err, req, res, next) => {
  res.status(503).send("Server is facing an issue! please try again later.");
});
//exporting to server
export default app;
