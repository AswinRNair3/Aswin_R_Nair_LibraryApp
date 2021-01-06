const express = require('express');
const addRouter = express.Router();


function addrouter(nav){

   
       
      addRouter.get('/',function(req,res){
           res.render("addBook",
           {
                   title:'Add Books',
                   nav,
                   
                   
           });
       });
       
 

       return addRouter;

}



   module.exports = addrouter; //Exporting booksRouter to app.js