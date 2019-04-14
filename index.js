// NPM/Middleware
require('dotenv').config();

const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");
const cloudinary = require('cloudinary');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');

// Post Controllers
const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
// User Controllers
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

// Express + Mongo Integration
const app = new express();

const mongoStore = connectMongo(expressSession);

app.use(connectFlash())

app.use(expressSession({
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: true,
  saveUninitialized: true
}));

const url = process.env.MONGO_CONNECTION_STRING;
if(!url) throw new Error('>>>NOT PROCESSING<<<');
console.log(url);
mongoose.connect(url,{ useNewUrlParser: true });

// Middleware
app.use(fileUpload());
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

// Global Middleware

app.use('*',(req,res,next) => {
  edge.global('auth',req.session.userId)
  next()
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

    //Custom Middleware
    const storePost = require('./middleware/storePost');
    const auth = require('./middleware/auth');
    const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

    // Pass In As Parameter Instead
    //app.use('/posts/store', storePost)
    //app.use('/posts/new' , auth) 

    //Call Controllers
    app.get("/", homePageController);
    app.get("/post/:id", getPostController);
    app.get("/posts/new", auth, createPostController);
    app.post("/posts/store", auth, storePost, storePostController);

    app.get('/auth/register',redirectIfAuthenticated, createUserController);
    app.get('/auth/login', redirectIfAuthenticated, loginController);
    app.get('/auth/logout', auth, logoutController);

    app.post('/users/register', redirectIfAuthenticated, storeUserController);
    app.post('/users/login', redirectIfAuthenticated, loginUserController)

    app.use((req,res) => res.render('not-found'));

// Run On Port
app.listen(process.env.PORT || 8080, () => {
  console.log("App is live at: http://localhost:8080/");
});
