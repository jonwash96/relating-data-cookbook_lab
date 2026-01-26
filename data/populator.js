const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const { Recipe, recipeTemplate } = require('../models/Recipe.js');
const Ingredient = require('../models/Ingredient.js');
const User = require('../models/User.js')
const users = require('./users.js');
const ingredients = require('./ingredients.js');
const recipes = require('./recipes.js');
const bcrypt = require("bcrypt");

mongoose.connect(process.env.MONGODB_URI);
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

async function encryptUserPws() {
    const usrs = await User.find();
    const passwordKey = [];
    
    for (let usr of usrs) {
        const initialPw = String(usr.password);
        usr.password = bcrypt.hashSync(usr.password, 10);
        passwordKey.push({username:usr.username, password:initialPw, hashWord:usr.password});
        await User.findByIdAndUpdate(usr._id, usr);
        console.log(usr.username, "Updated");
    };

    console.log(passwordKey);
    
};

async function search(term) {
    const exactRegex = new RegExp(term, 'ig');
    const exactMatch = await User.find({ username:exactRegex });

    const fuzzyRegex = new RegExp(term.split('').map(char => `${char}.*`).join(''), 'ig');
    const fuzzyMatch = await User.find({ username:fuzzyRegex });
    
    const beginEndRegex = new RegExp(term.split(' ').map(word => word[0]+".+"+word[word.length -1]).join(' '), 'ig');
    const beginEndMatch = await User.find({ username:beginEndRegex });
    
    const eachWordExact = await Promise.all(term.split(' ').map(async (word) => {
        const regex = new RegExp(word, 'ig');
        return await User.find({ username:regex });
    }))

    const eachWordFuzzy = await Promise.all(term.split(' ').map(async (word) => {
        const regex = new RegExp(word.split('').map(char => `${char}.*`).join(''), 'ig');
        console.log(" WORD:", word);
        return await User.find({ username:regex });
    }))

    console.log(
        "EXACT MATCH", exactMatch,
        "FUZZY MATCH", fuzzyMatch,
        "BEGIN END", beginEndMatch,
        "EACH WORD EXACT", eachWordExact,
        "EACH WORD FUZZY", eachWordFuzzy,
    );
    process.exit();
}; search("j s")