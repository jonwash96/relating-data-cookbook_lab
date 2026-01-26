//* MNT
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const methodOverride = require('method-override');
const searchController = require('./controllers/search.js');
const authController = require('./controllers/auth.js');
const ingredientsController = require('./controllers/ingredients.js');
const recipesController = require('./controllers/recipes.js');
const userController = require('./controllers/user.js');
const MongoStore = require('connect-mongo');
const passDataToView = require('./middleware/pass-data-to-view.js');


//* VAR
const PORT = 3001;

//* APP
const app = express();

//* MID
require('./db/connection.js');
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}));
app.use(passDataToView);

//* ROUTE
app.use('/auth', authController);
app.get('/users', async (req,res) => res.redirect('/'))
app.get('/user', async (req,res) => res.redirect('/'))
app.get('/users//dashboard', async (req,res) => res.redirect('/'))
app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/dashboard', (req,res) => {
    res.redirect(`/user/${req.session.user._id}/dashboard`);
})

app.use('/ingredients', ingredientsController);
app.use('/recipes', recipesController);
app.use('/user', userController);
// app.use('/search', searchController);

app.get('/*splat', (req, res) => {
    res.render('404.ejs', { url: req.url })
});

//* IO
app.listen(PORT, () => console.log(`Server Running on port ${PORT}. Access at [http://localhost:${PORT}]`));