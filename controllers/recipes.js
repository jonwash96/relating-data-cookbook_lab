//* MNT
const express = require('express');
const router = express.Router();
const { Recipe, Step, Photo } = require('../models/Recipe.js');
const User = require('../models/User.js');
const Ingredient = require('../models/Ingredient.js');

//* VAR

//* ROUTE
// STATIC
// Index - GET (Community-Oriented)
router.get('/', async (req, res) => {
    const recipes = await Recipe.find().populate('favoritedBy', 'ingredients.ref')
    res.render('recipes/index.ejs', { recipes});
})

// New - GET
router.get('/new', async (req, res) => {
    const ingredients = await Ingredient.find();
    const tagOptions = await Recipe.find().tags?.split(' ') || [];
    const ingredientOptions = await Ingredient.find();

    res.render('recipes/new.ejs', { ingredients, tagOptions, ingredientOptions })
});

// Create - POST 
router.post('/', async (req, res) => {
    const newRecipe = req.body;
    
    console.log("\nPRE",newRecipe);
    
    newRecipe['owner'] = req.session.user._id;
    console.log
    
    const ingredients = [];
     for (let key in newRecipe) {
        if (/ingredient/.test(key)) {
            const ingredient = {};
            ingredient['name'] = newRecipe[key][0];
            ingredient['quantity'] = newRecipe[key][1];
            ingredients.push(ingredient);
        }
    }; newRecipe['ingredients'] = ingredients;

    const photos = [];
    for (let key in newRecipe) {
        if (/photo/.test(key)) {
            const photo = {};
            photo['title'] = newRecipe[key][0];
            photo['url'] = newRecipe[key][1];
            photos.push(photo);
        }
    }; newRecipe['photos'] = photos;

    const instructions = [];
    for (let key in newRecipe) {
        if (/step/.test(key)) {
            const step = {};
            step['title'] = newRecipe[key][0];
            step['description'] = newRecipe[key][1];
            step['imgUrl'] = newRecipe[key][2];
            step['order'] = Number(key.match(/\dd?/g)[0]);
            instructions.push(step);
        }
    }; newRecipe['instructions'] = instructions;

    console.log("\n\nPOST",newRecipe);

    const createdRecipe = await Recipe.create(newRecipe);
    await User.findByIdAndUpdate(req.session.user, {$push: {'recipes.byUser': createdRecipe._id}})
    req.session.message = "New Recipe Successfully Created."
    res.redirect(`/recipes/${createdRecipe._id}`);
})


// DYNAMIC
// Show - GET => Show recipe
router.get('/:recipeId', async (req, res) => {
    let recipe;
    try {
        recipe = await Recipe.findById(req.params.recipeId).populate('ingredients.ingredientID');
    } catch (error) {
        res.send(error)
    }

    res.render('recipes/show-one.ejs', { recipe });
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
    const updatedRecipe = Object.create(req.body);
    const ingredients = [];
    for (let key in updatedRecipe) {
        if (/ingredient\dd?\$name/.test(key)) {
            const ingredient = {};
            ingredient['name'] = updatedRecipe[key][0];
            ingredient['quantity'] = updatedRecipe[key][1];
            ingredients.push(ingredient);
        }
    }; updatedRecipe['ingredients'] = ingredients;

    const photos = [];
    for (let key in updatedRecipe) {
        if (/photo\dd?\$title/.test(key)) {
            const photo = {};
            photo['title'] = updatedRecipe[key][0];
            photo['url'] = updatedRecipe[key][1];
            photos.push(photo);
        }
    }; updatedRecipe['photos'] = photos;

    const instructions = [];
    for (let key in updatedRecipe) {
        if (/step\dd?\$title/.test(key)) {
            const step = {};
            step['title'] = updatedRecipe[key][0];
            step['description'] = updatedRecipe[key][1];
            step['imgUrl'] = updatedRecipe[key][2];
            instructions.push(step);
        }
    }; updatedRecipe['instructions'] = instructions;

    await Recipe.findByIdAndUpdate(pre.params.recipeId, updatedRecipe)
})

// Edit - GET
router.get('/:recipeType/:recipeId/edit', async (req, res) => {
    const recipe = req.params.recipeType==='asset' ? Asset : License;
    const data = await recipe.findById(req.params.recipeId);

    res.render(`recipes/${req.params.recipeType}s/edit.ejs`, { data });
})

//* IO
module.exports = router;