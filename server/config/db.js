import { Sequelize } from "sequelize";
import env from "dotenv";

env.config();
// Une instance de sequelize
const sequelize = new Sequelize(
  process.env.MYSQL_NAME,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASS,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    logging: true,
  }
);
async function testConnection() {
  try {
    // await sequelize.sync({ alter: true })
    await sequelize.authenticate();
    // console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
export default sequelize;
