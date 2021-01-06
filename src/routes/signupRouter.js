const express = require('express');
const signupRouter = express.Router();



function signuprouter(nav){

   
       
 signupRouter.get('/',function(req,res){
        res.render("signup",
        {
          nav,
          title:'Sign Up',
        });
    });
       
 

       return signupRouter;

}



   module.exports = signuprouter; //Exporting booksRouter to app.js