const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const SECRET_KEY = "Testing";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
const Sequelize = require("sequelize");

const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(express.static(__dirname + '../app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false
}));
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

const {student , teacher , teacherCourse , course } = require('../database/model');

// app.get('/yzn' , function(req, res){
//   console.log(res);
//   res.send("Hello Woorld");
// })



//Signup for student

app.post('/signupstudent' , function(req , res) {
  // console.log(res);
  const info = (req.body);


  // let firstname  = req.body.firstname;
  // let lastname  = req.body.lastname;
  let username = req.body.username;
  let password = req.body.password;
  let phonenumber = req.body.phonenumber;
  let location  = req.body.location;
  let email = req.body.email;
  password = bcrypt.hashSync(info.password, 10);

  student
  .create({
    // firstname : firstname,
    // lastname : lastname,
    username : username,
    password : password,
    phonenumber : phonenumber,
    location : location,
    email : email
  })
  .then(function() {
    return res.status(201).send({ success: 'Sign up as engineer successful' });
  })
  .catch(function(err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).send({ error: 'This username is already taken' });
    }
    return res.status(500).send({ error: 'Server Error' });
  });

});


//Sign in for student

app.post('/signinstudent' , function(req, res){
  const username = req.body.username;

  const password = req.body.password;

  //Check if users exists in the database
  student.findOne({where : {username : username}}).then(function(user){
    if(!user){
      return res.send({});
    }
    //compare with stored password
    const existingHashedPassword = user.password;
    bcrypt.compare(password , existingHashedPassword).then(function(isMatching){
      if(isMatching){
        //create a token and send to client
        const token = jwt.sign({username : user.username} , SECRET_KEY, {expiresIn : 4000});
        return res.send({token : token});
      }else {
        return res.status(401).send({ error: 'Wrong password' });        }
    })
  })
})




  //Sign Up For teacher

  app.post('/signupteacher' , function(req , res) {
    let name = req.body.name;
      let username = req.body.username;
      let password = req.body.password;
      let phonenumber = req.body.phonenumber;
      let email = req.body.email;
      let degree = req.body.degree;
      let exp = req.body.exp;
      let hobbies = req.body.hobbies;
      let faculty = req.body.faculty;
      let img = req.body.img;
      password = bcrypt.hashSync(password, 10);



      teacher

      .create({
        name : name,
        username : username,
        password  : password,
        phonenumber : phonenumber,
        email : email,
        degree : degree,
        exp : exp,
        hobbies : hobbies,
        faculty : faculty,
        img : img


      })
      .then(function() {
        return res.status(201).send({ success: 'Sign up as engineer successful' });
      })
      .catch(function(err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
          return res.status(400).send({ error: 'This username is already taken' });
        }
        return res.status(500).send({ error: 'Server Error' });
      });

  });


  app.get('/teacher' , function(req ,res){

    teacher.findAll({
      attributes : [ 'id' ,'username' ]
    })
    .then(teacher => {

      const teachername = [];
      for(let i=0 ; i<teacher.length ; i++){
        teachername.push(teacher[i].dataValues)
      }
      console.log('Done')
      res.json({teachername});


    })
    .catch(err => console.log(err));
    // teacher.findAll({where : {name : name}}).then();

    //Add gig





  })










  app.get('/teachersInfo' , (req, res) =>{

      const id = req.params.number;
    teacher.findAll({

      attributes : [
          'id',
          'name',
               'degree' ,
                'exp'   ,
                'hobbies' ,
                'faculty',
                'phonenumber',
                'email',
                'img',

              ],

            })
            .then((result) => res.json(result));
  })




  app.post('/signinteacher' , function(req, res){
    const username = req.body.username;

    const password = req.body.password;

    //Check if users exists in the database
    teacher.findOne({where : {username : username}}).then(function(user){
      if(!user){
        return res.status(401).send({error : 'Please sign up'});
      }
      //compare with stored password
      const existingHashedPassword = user.password;
      bcrypt.compare(password , existingHashedPassword).then(function(isMatching){
        if(isMatching){
          //create a token and send to client
          const token = jwt.sign({username : user.username} , SECRET_KEY, {expiresIn : 4000});
          return res.send({token : token});
        }else {
          return res.status(401).send({ error: 'Wrong password' });        }
      })


    })
  })


  app.post('/teacherCourse' , function(req , res){

        const id = req.body.id;
        const name = req.body.name;
        const material = req.body.material;
        const info = req.body.info;

        teacherCourse
        .create({
          id : id,
          name : name,
          material : material,
          info : info
        })

        .then(function (){
          return res.status(201).send({'success':'teacherCourse Sucessfully'});
        })
        .catch(function(err){
          if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).send({ error: 'This matrial  already taken' });
          }
          return res.status(500).send({ error: 'Server Error' });
        })


  });


  app.post('/questions' , function(req, res) {

    const questions = req.body.questions;

    const anwers = req.body.anwers;

    questions

    .create({
      questions : questions,
      anwers : anwers
    })
    .then(function (){
      return res.status(201).send({'success':'questions Sucessfully'});
    })
    .catch(function(err){
      if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).send({ error: 'There is question like this question' });
      }
      return res.status(500).send({ error: 'Server Error' });
    })

  })





const server = app.listen(port, () => {
	console.log(`app listening on port ${port}!`);
})
