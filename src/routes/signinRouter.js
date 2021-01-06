const express = require('express');
const signinRouter = express.Router();



function signinrouter(nav){

   
       
 signinRouter.get('/',function(req,res){
        res.render("signin",
        {
          nav,
          title:'Sign In',
        });
    });
       
 

       return signinRouter;

}



   module.exports = signinrouter; //Exporting booksRouter to app.js