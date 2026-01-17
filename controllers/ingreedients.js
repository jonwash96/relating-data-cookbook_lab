//* MNT
const express = require('express');
const router = express.Router();
const { Ingredient } = require('../models/Ingredient.js');

//* VAR

//* ROUTE
// STATIC
// Index - GET 
router.get('/', async (req, res) => {
    const indreedients = await Ingredient.find({});
    res.render('ingredients/show.ejs', { indreedients });
})

// New - GET 
router.get('/new', (req, res) => {
    req.session.data = {modal:'new'};
    res.redirect('/ingredients');
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
        req.session.data = {modal:'show'};
        res.redirect(`/ingredients/${req.params.ingredientId}`);
    } catch (error) {
        console.error(error);
        req.session.message = "An Internal server error has occured. Please try again later"
        res.status(500).redirect(`/ingredients/${req.params.ingredientId}/edit`);
    }
})

// Edit - GET 
router.get('/:ingredientId/edit', async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.ingredientId);
    res.render(`ingredients/${req.params.ingredientId}s/edit.ejs`, { ingredient });
})

// Show - GET 
router.get('/:ingredientId', async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.ingredientId);
    res.render('ingredients/_show-one.ejs', { ingredient });
})


//* IO
module.exports = router;