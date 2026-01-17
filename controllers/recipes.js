//* MNT
const express = require('express');
const router = express.Router();
const { Recipe, Step, Photo } = require('../models/Recipe.js');
const { User } = require('./models/User.js');
const { Ingredient } = require('../models/Ingredient.js');

//* VAR

//* ROUTE
// STATIC
// Index - GET (Community-Oriented)
router.get('/', async (req, res) => {
    const recipes = await Recipe.find().populate('favoritedBy', 'ingredients.ref')
    res.render('recipes/index.ejs', { data, templates });
})

// New - GET
router.get('/new', async (req, res) => {
    const ingredients = await Ingredient.find();
    res.render('recipes/new.ejs', { ingredients })
});

// Create - POST 
router.post('/', async (req, res) => {
    const newRecipe = Object.create(req.body);
    const ingredients = [];
    for (let key in req.body) {
        if (/ingredient\dd?\$name/.test(key)) {
            const ingredient = {};
            ingredient['name'] = key.split('$')[1];
            ingredient['quantity'] = req.body.find(i => Object.keys(i).match(key.split('$')[0]+'quantity'));
            ingredient['ref'] = await Ingredient.find({name:ingredient.name})?._id || null;
            ingredients.push(ingredient);
        }
    }; newRecipe['ingredients'] = ingredients;

    const photos = [];
    for (let key in req.body) {
        if (/photo\dd?\$title/.test(key)) {
            const photo = {};
            photo['title'] = key.split('$')[1];
            photo['url'] = req.body.find(i => Object.keys(i).match(key.split('$')[0]+'url'));
            photos.push(photo);
        }
    }; newRecipe['photos'] = photos;

    const instructions = [];
    for (let key in req.body) {
        if (/step\dd?\$title/.test(key)) {
            const step = {};
            step['title'] = key.split('$')[1];
            step['description'] = req.body.find(i => Object.keys(i).match(key.split('$')[0]+'description'));
            instructions.push(step);
        }
    }; newRecipe['instructions'] = instructions;

    await Recipe.create(newRecipe);
    req.session.message = "New Recipe Successfully Created."
    res.redirect(`/recipes`);
})


// DYNAMIC
// Index - GET (User-Oriented Recipes)
router.get('/:userId', async (req, res) => {
    const recipes = await User.findById(req.session.user._id)
        .populate('recipes.byUser recipes.saved favorites.recipes')

    res.render('recipes/index.ejs', { recipes });
})

// Delete - DELETE
router.delete('/:recipeId', async (req, res) => {
    try {
        Recipe.findByIdAndDelete(req.params.recipeId);
        res.status(204);
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect(`/recipes/${req.params.recipeId}`);
    }
})

// Update - PUT
router.put('/:recipeId', async (req, res) => {
    try {
        await Recipe.findByIdAndUpdate(req.params.recipeId, req.body);
        req.session.message = "Recipe Successfully Updated";
        res.redirect(`/recipes/${req.params.recipeId}`);
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect(`/recipes/${req.params.recipeId}`);
    }
})

// Edit - GET
router.get('/:recipeType/:recipeId/edit', async (req, res) => {
    const recipe = req.params.recipeType==='asset' ? Asset : License;
    const data = await recipe.findById(req.params.recipeId);

    res.render(`recipes/${req.params.recipeType}s/edit.ejs`, { data });
})

// Show - GET
router.get('/:recipeId', async (req, res) => {
    const recipe = await Recipe.findById(req.params.recipeId).populate('ingredients')

    res.render('recipes/show.ejs', { data, template });
})


//* IO
module.exports = router;