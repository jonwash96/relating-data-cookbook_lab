//* MNT
const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient.js');
const User = require('../models/User.js');

//* VAR

//* ROUTE
// STATIC
// Index - GET 
router.get('/', async (req, res) => {
    const ingredients = await Ingredient.find();
    const user = await User.findById(req.session.user._id)
            .populate('favorites.ingredients pantry');
    res.locals.data = {location:'ingredients'};

    res.render('ingredients/show.ejs', { ingredients, pantry:user.pantry });
})

// New - GET 
router.get('/new', async (req, res) => {
    res.locals.data = {modal:'new'};
    const ingredients = await Ingredient.find();
    res.render('ingredients/show.ejs', { ingredients });
});

// Create - POST
router.post('/', async (req, res) => {
    try {
        await Ingredient.create(req.body);
        req.session.message = "Item Successfully Created";
        res.redirect(`/ingredients`);
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect('/ingredients');
    }
})


// DYNAMIC
// Delete - DELETE 
router.delete('/:ingredientId', async (req, res) => {
    try {
        await Ingredient.findByIdAndDelete(req.params.ingredientId);
        res.status(204);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})

// Update - PUT 
router.put('/:ingredientId', async (req, res) => {
    try {
        await Ingredient.findByIdAndUpdate(req.params.ingredientId, req.body);
        res.locals.data = {location:'ingredients', modal:'show'};
        res.redirect(`/ingredients/${req.params.ingredientId}`);
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect(`/ingredients/${req.params.ingredientId}/edit`);
    }
})

// Edit - GET 
router.get('/:ingredientId/edit', async (req, res) => {
    const item = await Ingredient.findById(req.params.ingredientId);
    const ingredients = await Ingredient.find();
    res.locals.data = {location:'ingredients', modal:'edit'};

    res.render(`ingredients/show.ejs`, { ingredients, item });
})

// Show - GET 
router.get('/:ingredientId', async (req, res) => {
    const item = await Ingredient.findById(req.params.ingredientId);
    const ingredients = await Ingredient.find();
    res.locals.data = {location:'ingredients', modal:'show'};

    res.render('ingredients/show.ejs', { ingredients, item });
})


//* IO
module.exports = router;