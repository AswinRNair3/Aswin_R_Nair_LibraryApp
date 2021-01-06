const express = require('express');
const booksRouter = express.Router();

function router(nav){

    var books = [
        {
            title:'Tom and Jerrry ',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:'Tom.jpg'
       
        },
        {
           title:'Mayavi ',
           author:'J K Rowling',
           genre:'Fantacy',
           img:'mayavi.jpg'
       
       },
       {
        title:'The diary of a Whimpy kid ',
        author:'Jeff Kinney',
        genre:'Fiction,Comedy',
        img:'wimpy.jpg'
    
       },
       {
        title:'The story of my life ',
        author:'Helen keller',
        genre:'Memoir',
        img:'story.jpg'
    
       },
       {
        title:'The Dhoni touch',
        author:'Bharath Sundareshan',
        genre:'Biography',
        img:'ms.jpg'
    
      }
       
       ]
       
       booksRouter.get('/',function(req,res){
           res.render("books",
           {
                   title:'Books',
                   nav,
                   books
                   
           });
       });
       
       booksRouter.get('/:id',function(req,res){
           const id = req.params.id
           res.render('book',
           {
               title:'Book',
               nav,
               book: books[id]
               
           });
       });   

       return booksRouter;

}



   module.exports = router; //Exporting booksRouter to app.js