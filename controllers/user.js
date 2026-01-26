//* MNT
const express = require('express');
const router = express.Router();
const { Recipe, Step, Photo } = require('../models/Recipe.js');
const User = require('../models/User.js');
const Ingredient = require('../models/Ingredient.js');

//* VAR

//* ROUTE
// Static
// Index - GET => Recipes
router.get('/recipes', async (req, res) => {
    const user = await User.findById(req.session.user._id)
        .populate('recipes.byUser recipes.saved favorites.recipes');

    res.render('recipes/my-recipes.ejs', {
        recipes:user.recipes.byUser,
        saved:user.recipes.saved,
        favorites:user.favorites.recipes 
    }); // DATA
})

// Index - GET => Ingredients
router.get('/ingredients', async (req, res) => {
    const user = await User.findById(req.session.user._id)
        .populate('favorites.ingredients pantry');
 
    res.locals.data = {location:'user/ingredients'}; // VAR
    res.render('ingredients/show.ejs', { ingredients:user.favorites.ingredients, pantry:user.pantry }); // DATA
})

// New - GET => Pantry item Modal
router.get('/pantry/new', async (req,res) => {
    const user = await User.findById(req.session.user._id)
        .populate('favorites.ingredients pantry');

    res.locals.data = {modal:'new', location:'user/ingredients'}; // VAR
    res.render('ingredients/show.ejs', { ingredients:user.favorites.ingredients, pantry:user.pantry }); // DATA
})

// Create - POST
router.post('/pantry', async (req, res) => {
    try {
        await Ingredient.create(req.body);

        req.session.message = "Item Successfully Created"; // DATA
        res.redirect('/user/ingredients'); // ROUTE
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect('/ingredients');
    }
})

// DYNAMIC
// Index - GET => Dashboard
router.get('/:userId/dashboard', async (req, res) => {
    const user = await User.findById(req.session.user._id)
        .populate('recipes.byUser recipes.saved favorites.recipes favorites.ingredients')

    res.render('users/dashboard.ejs', { user });
})

// Edit - GET => Pantry Item Modal
router.get('/pantry/:itemId/edit', async (req,res) => {
    const user = await User.findById(req.session.user._id)
        .populate('pantry.ingredientID recipes.byUser recipes.saved favorites.recipes favorites.ingredients');
    const item = user.pantry.find(i => i._id==req.params.itemId);
    res.locals.data = {modal:'edit'};

    res.render('users/dashboard.ejs', { user, item, forPantry:true });
})

// Show - GET => Pantry Item Modal
router.get('/pantry/:location/:itemId', async (req,res) => {
    const user = await User.findById(req.session.user._id)
        .populate('pantry.ingredientID recipes.byUser recipes.saved favorites.recipes favorites.ingredients');
    const item = user.pantry.find(i => i._id==req.params.itemId);
    console.log(req.params.itemId==user.pantry[0]._id);
    console.log("ITEM:", item);
    console.log("PANTRY:", user.pantry);
    res.locals.data = {modal:'show'};

    if (req.params.location==='dashboard') {
        res.render('users/dashboard.ejs', { user, item, forPantry:true })
    } else if (req.params.location==='ingredients') {
        res.render('ingredients.ejs', { user, item, forPantry:true })
    }
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
router.put('/pantry/:itemId', async (req, res) => {
    const date = new Date(req.body.expires);
    const epochMS = Math.floor(date.getTime());
    const updatedItem = await User.updateOne(
        {
            _id:req.session.user._id,
            'pantry._id':req.params.itemId
        },
        {$set: {
            'pantry.$.name':req.body.name,
            'pantry.$.quantity':req.body.quantity,
            'pantry.$.expires':epochMS,
            'pantry.$.img':req.body.img,
            'pantry.$.notes':req.body.notes
        }}
    );

    res.redirect(`/user/pantry/dashboard/${req.params.itemId}`);
})


//* IO
module.exports = router;