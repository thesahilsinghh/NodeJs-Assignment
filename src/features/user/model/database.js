import { Sequelize } from "sequelize";

const sequelize = new Sequelize("user_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((data) => console.log("connection established!"))
  .catch((err) => console.log("Unable to connect to database: \n"+err));

export default sequelize;
