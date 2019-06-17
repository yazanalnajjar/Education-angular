const {db , Sequelize} = require('./db.js');

db.Sequelize = Sequelize;



const student = db.define('student' , {

  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },

  // firstname : {type :Sequelize.STRING , required : true},
  // lastname : {type :Sequelize.STRING , required : true},
  username : {type : Sequelize.STRING , required : true , unique: true },
  password : {type : Sequelize.STRING , required  : true},
  phonenumber : {type : Sequelize.INTEGER , required : true},
  location : {type : Sequelize.STRING , required : true},
  email  : {type : Sequelize.STRING , required : true},




  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }


})


const teacher = db.define('teacher' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
   name : {type: Sequelize.STRING , required : true},

  username : { type : Sequelize.STRING , required : true , unique: true},
  password : {type : Sequelize.STRING , required : true},
  phonenumber : {type : Sequelize.STRING , required : true},
  email  : {type : Sequelize.STRING , required : true},
  degree : {type:Sequelize.STRING , required : true},
  exp : {type : Sequelize.STRING , required : true},
  hobbies : {type : Sequelize.STRING , required : true },
  faculty : {type:Sequelize.STRING , required : true},

  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})


// const person = db.define('person' , {
//   person_name : {
//     type :Sequelize.STRING
//   },
//   business_name : {
//     type : Sequelize.STRING
//   },
//   business_gst_number: {
//     type: Sequelize.INTEGER
//   }

// })




const teacherCourse = db.define('teacherCourse' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
  name : {type : Sequelize.STRING , required : true},
  material : {type: Sequelize.STRING , required :true},
  info : {type: Sequelize.STRING , required : true},
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

const material = db.define('materail', {
  id : {type: Sequelize.INTEGER , autoIncrement: true , primaryKey : true},
  title : {type : Sequelize.STRING , required :true}
})

const courses = db.define('course' , {
  id: { type: Sequelize.INTEGER,  autoIncrement: true, primaryKey: true },
  name : {type : Sequelize.STRING , required : true },
  matrial : {type: Sequelize.STRING , required : true},
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }

})

const question = db.define('question' ,{

  id : {type : Sequelize.INTEGER , autoIncrement:true ,primaryKey : true  },

  questions : {type : Sequelize.STRING , required : true},
  answer : {type : Sequelize.STRING , required :true},
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

const Info = db.define('Info' , {
  id : {type : Sequelize.INTEGER , autoIncrement:true ,primaryKey : true  },

  info : {type :Sequelize.STRING , required :true },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }

})

student.belongsTo(teacher);





module.exports.courses = courses;
module.exports.teacher = teacher;
module.exports.student = student;
module.exports.teacherCourse = teacherCourse;
module.exports.Info = Info;
module.exports.question = question;
module.exports.material = material;
// module.exports.person = person;

