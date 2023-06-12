import { Sequelize } from "sequelize-typescript";
import config from "./lib/config";
config;

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: config.dbName,
  password: config.dbPassword,
  username: config.dbUser,
  storage: ":memory:",
  models: [__dirname + "/models"],
});

// export const sequelize = new Sequelize({
//   database: "railway",
//   username: "postgres",
//   password: "C65Qhq92tHC7iDdKnibe",
//   host: "containers-us-west-159.railway.app",
//   port: parseInt("7322", 10), // convert port to a number
//   dialect: "postgres", // replace 'postgres' with the appropriate dialect for your database
//   logging: false, // set to console.log to see the raw SQL queries
// });
