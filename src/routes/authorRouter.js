const express = require('express');
const authorRouter = express.Router();

function authorrouter(nav){

    var authors = [
        {
            title:'Tom and Jerrry ',
            author:'Joseph Barbera',
            genre:'He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1932 and subsequently Terrytoons in 1936. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. ',
            img:'barb.jpg'
       
        },
        {
           title:'Mayavi ',
           author:'J K Rowling',
           genre:'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith.',
           img:'jk.jpg'
       
       },
       {
        title:'The diary of a Whimpy kid ',
        author:'Jeff Kinney',
        genre:'Kinney was born and raised in Fort Washington, Maryland. Kinney attended Potomac Landing Elementary School and later Bishop McNamara High School, where he graduated from in 1989. He has an older brother and sister, and a younger brother.[1] He attended the University of Maryland, College Park in the early 1990s. It was in college that Kinney created a popular comic strip, Igdoof, which ran in the school newspaper, The Diamondback.',
        img:'Jeff.jpg'
    
       },
       {
        title:'The story of my life ',
        author:'Helen keller',
        genre:'Helen Adams Keller (June 27, 1880 – June 1, 1968) was an American author, disability rights advocate, political activist and lecturer. Born in West Tuscumbia, Alabama, she lost her sight and hearing after a bout of illness at the age of nineteen months. She then communicated primarily using home signs until the age of seven when she met her first teacher and life-long companion Anne Sullivan, who taught her language, including reading and writing; Sullivans first lessons involved spelling words on Kellers hand to show her the names of objects around her. She also learned how to speak and to understand other peoples speech using the Tadoma method. After an education at both specialist and mainstream schools, she attended Radcliffe College of Harvard University and became the first deafblind person to earn a Bachelor of Arts degree. She worked for the American Foundation for the Blind (AFB) from 1924 until 1968, during which time she toured the United States and traveled to 39 countries around the globe advocating for those with vision loss.',
        img:'helen.jpg'
    
       },
       {
        title:'The Dhoni touch',
        author:'Bharath Sundareshan',
        genre:'Bharat Sundaresan lives for West Indian cricket and pro wrestling, and is a raconteur of all things and metal music. He has covered cricket for the Indian Express for the last ten years-seven of which he spent tracking down the Jamaican cricketer, Patrick Patterson.',
        img:'barat.jpg'
    
       }

       
       ]
       
       authorRouter.get('/',function(req,res){
           res.render("authors",
           {
                   title:'Authors',
                   nav,
                   authors
                   
           });
       });
       
       authorRouter.get('/:id',function(req,res){
           const id = req.params.id
           res.render('author',
           {
               title:'Author',
               nav,
               author: authors[id]
               
           });
       });   

       return authorRouter;

}



   module.exports = authorrouter; //Exporting authorRouter to app.js