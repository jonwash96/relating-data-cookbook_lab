const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');

const stepSchema = new mongoose.Schema({
    order:Number,
    title:String,
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
    favoritedBy:[mongoose.Schema.Types.ObjectId]
};

const recipeSchema = new mongoose.Schema(recipeTemplate);

recipeSchema.pre('save', function() {
    this.resourceType = 'Recipe';
    this.created = Date();
    this.owner = req.session.user._id;
    
});

// ingredientSchema.pre('save', async function() {
//     this.ref = await Ingredient.find({name:this.name})._id || null;
// })

const Recipe = mongoose.model('Recipe', recipeSchema);
const Step = mongoose.model('Step', stepSchema);
const Photo = mongoose.model('Photo', photoSchema);

module.exports = { Recipe, Step, Photo, recipeTemplate };