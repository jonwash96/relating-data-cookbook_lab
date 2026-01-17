//* MNT
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const searchController = require('./controllers/search.js');
const authController = require('./controllers/auth.js');
const ingredientsController = require('./controllers/ingredients');
const recipes = require('./controllers/recipes.js');

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

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.use('/ingredients', ingredientsController);
app.use('/recipes', recipesController);
// app.use('/search', searchController);

app.get('/*splat', (req, res) => {
    res.render('404.ejs', { url: req.url })
});

//* IO
app.listen(PORT, () => console.log(`Server Running on port ${PORT}. Access at [http://localhost:${PORT}]`));