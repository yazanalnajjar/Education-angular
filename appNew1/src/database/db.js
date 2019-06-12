const Sequelize = require("sequelize");

//Database connection
const db = new Sequelize('hisasonline', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql',
})

db.sync({
  force: false,
  logging: false
}).then(() => {
  console.log(`Database & tables created!`)
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;
