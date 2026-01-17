require('dotenv').config();
const mongoose = require("mongoose");
const { Recipe, recipeTemplate } = require('../models/Recipe.js');
const { Ingredient, ingredientTemplate } = require('../models/Ingredient.js');
const User = require('../models/User.js')
const users = require('./users.js');
const ingredients = require('./ingredients.js');
const recipes = require('./recipes.js');

mongoose.connect(process.env.MONGODB_URI+process.env.MONGODB_DB);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to", mongoose.connection.name);
});
mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDB at db", mongoose.connection.name);
});

async function createUsers() {
    users.forEach(async (user) => {
        await User.create(user)
    });

    const foundUsers = await User.find();
    console.log(foundUsers);
    process.exit();
}

async function createIngredients() {
    ingredients.forEach(async (ingredient) => {
        await Ingredient.create(ingredient);
    })

    const result = await Ingredient.find();
    console.log(result);
    process.exit();
};

async function addOwnersToRecipes() {
    recipes.forEach(async recipe => {
        const randomNumber = Math.floor(Math.random() * (users.length -2));
        const dbUsers = await User.find();
        try {
            const randomUser = Object.values(dbUsers)[randomNumber].id;
            recipe.owner = randomUser;
            recipe.ingredients = [];
            console.log("\n", dbUsers[randomNumber].displayname, "Now owns:")
            console.log(recipe);
        } catch (error) {
            console.error("Error At: ", dbUsers[randomNumber], recipe, error)
        }
    })
}; 

async function createRecipes() {
    recipes.forEach(async (recipe) => {
        await Recipe.create(recipe)
    });

    const result = await Recipe.find();
    console.log(result);
    process.exit();
};

createRecipes();