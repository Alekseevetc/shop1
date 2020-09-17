const Sequalize = require("sequelize");
const DBHOST = "10.7.101.193";
const DBUSERNAME = "intershop-alekseevetc";
const PASSWORD = "intershop-alekseevetc";
const DATABASENAME = "intershop-alekseevetc";

// const DBHOST = process.env.DBHOST;
// const RDBUSENAME = process.env.DBUSERNAME;
// const PASSWORD = process.env.PASSWORD;
// const DATABASENAME = process.env.DATABASENAME;

// console.log(process.env.DBHOST);

const sequalize = new Sequalize(DATABASENAME, DBUSERNAME, PASSWORD, {
  dialect: "mysql",
  host: DBHOST,
});

module.exports = sequalize;
