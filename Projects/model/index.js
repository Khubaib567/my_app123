const Sequelize = require("sequelize");

const sequelize = new Sequelize('cms', 'Khubaib', 'Khubi@123', {
  host: 'localhost',
  dialect: 'mysql' 

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);

//Assign foreign key based on user_id & the project_created attributes

db.users.hasMany(db.projects,{onDelete: 'CASCADE',onUpdate:'CASCADE'});
db.projects.belongsTo(db.users,{onDelete: 'CASCADE',onUpdate:'CASCADE'});

module.exports = db;

