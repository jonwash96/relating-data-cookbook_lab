const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');
const User = require('./User.js');

const stepSchema = new mongoose.Schema({
    order:Number,
    title:String,
    description:String,
    imgUrl:String
});

const photoSchema = new mongoose.Schema({
    title:String,
    url:String,
});

const ingredientEntrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:String,
    ingredientID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Ingredient'
    }
})

const favoritedBySchema = new mongoose.Schema({
    username:String,
    displayname:String,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})


const recipeTemplate = {
    created:Date,
    resourceType:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    instructions:{
        type:[stepSchema],
        required:true,
    },
    ingredients:{
        type:[ingredientEntrySchema],
        required:true,
    },
    description:String,
    prepTime:String,
    cookTime:String,
    servings:String,
    tags:String,
    photos:[photoSchema],
    notes:String,
    article:String,
    favoritedBy:[favoritedBySchema]
};

const recipeSchema = new mongoose.Schema(recipeTemplate);

recipeSchema.pre('save', function() {
    this.resourceType = 'Recipe';
    this.created = Date();
    
});

ingredientEntrySchema.pre('save', async function() {
    this.ingredientID = await Ingredient.find({name:this.name}) || null;
})

const Recipe = mongoose.model('Recipe', recipeSchema);
const Step = mongoose.model('Step', stepSchema);
const Photo = mongoose.model('Photo', photoSchema);

module.exports = { Recipe, Step, Photo, recipeTemplate };