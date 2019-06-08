const {db , Sequelize} = require('./db.js');



const student = db.define('student' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },

  fullName : {type :Sequelize.STRING , required : true},
  username : {type : Sequelize.STRING , required : true , unique: true },
  password : {type : Sequelize.STRING , required  : true},
  phoneNumber : {type : Sequelize.INTEGER , required : true},
  location : {type : Sequelize.STRING , required : true},
  email  : {type : Sequelize.STRING , required : true}


})


const teacher = db.define('teacher' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
  name : {type: Sequelize.STRING , required : true},
  username : { type : Sequelize.STRING , required : true , unique: true},
  password : {type : Sequelize.STRING , required : true},
  phoneNumber : {type : Sequelize.STRING , required : true},
  email  : {type : Sequelize.STRING , required : true}
})


const teacherName = db.define('teacherName' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },

  name : {type:Sequelize.STRING , required :true }

})


const teacherCourse = db.define('teacherCourse' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
  name : {type : Sequelize.STRING , required : true},
  material : {type: Sequelize.STRING , required :true},
  info : {type: Sequelize.STRING , required : true}
})

const material = db.define('materail', {
  id : {type: Sequelize.INTEGER , autoIncrement: true , primaryKey : true},
  title : {type : Sequelize.STRING , required :true}
})

const courses = db.define('course' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
  name : {type : Sequelize.STRING , required : true },
  matrial : {type: Sequelize.STRING , required : true}

})

teacher.belongsToMany(course , {through : 'teacherCourse'});
course.belongsToMany(teacher , {through : 'teacherCourse'})



module.exports.course = course;
module.exports.teacherName = teacherName;
module.exports.teacher = teacher;
module.exports.student = student;


