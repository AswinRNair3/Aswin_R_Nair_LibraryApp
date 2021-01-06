const express = require('express');
const app = express();

const nav = [
    {
        link:'/books',name:'Books'
    }, 
    {
        link:'/authors',name:'Authors'
    },
    // {
    //     link:'/add',name:'Add Books'
    // },
    {
        link:'/signin',name:'Sign In'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    // {
    //     link:'/logout',name:'Logout'
    // }
];

const nav1 = [
    {
        link:'/books',name:'Books'
    }, 
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/add',name:'Add Books'
    },
    {
        link:'/signin',name:'Sign In'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/logout',name:'Logout'
    }
];

var lib= [
    {
        title:'History ',
        author:'Joseph Barbera',
        genre:'Nonfiction history books include any books that lay out the known facts about a particular, time, culture, or event in history. Killing England by Bill O’Reilly and Martin Dugard is an example of a popular history book.',
        img:'history.jpg'
   
    },
    {
       title:'Memoir ',
       author:'J K Rowling',
       genre:'Memoirs are one type of autobiography. In this type of book, the author puts emphasis on specific moments or events that brought about specific life lessons. A popular example of a memoir is Becoming by Michelle Obama',
       img:'memoir.jpg'
   
   },
   
   {
       title:'Self-Help',
       author:'J K Rowling',
       genre:'Self-help books aim to aid the reader in improving some part of her life. Common topics covered by self-help books include relationships, finances, and mental health. The 7 Habits of Highly Effective People by Stephen R. Covey is a classic example of a popular self-help book',
       img:'help.png'
   
   },
   {
       title:'Politics ',
       author:'J K Rowling',
       genre:'Political nonfiction books can include books written by career politicians, books that explore political systems, or books that discuss the politics of a certain period. Political satires are one type of political book that make fun of some sort of person or institution. A Confederacy of Dunces by John Kennedy Toole is an example of a political satire.',
       img:'politics.jpg'
   
   },
   {
    title:'Science Fiction ',
    author:'J K Rowling',
    genre:'Also known as Sci-Fi, science fiction deals with the imagined future in terms of science or technology advances. This genre includes things like time travel, outer space, and intelligent life. The Time Machine by H.G. Wells is a classic example of science fiction.',
    img:'fiction.jpg'

}

   
   ]

const booksRouter = require('./src/routes/bookRouter')(nav) 
const authorRouter = require('./src/routes/authorRouter')(nav)
const addRouter = require('./src/routes/addBookRouter')(nav1)
const signinRouter = require('./src/routes/signinRouter')(nav)
const signupRouter = require('./src/routes/signupRouter')(nav)

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/add',addRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.get('/',function(req,res){
    res.render("index",
    {
      nav,
      title:'Library',
      lib
    });
});

app.get('/logout',function(req,res){
    res.render("index",
    {
      nav,
      lib,
      title:'Library',
    });
});



app.listen(8888);
