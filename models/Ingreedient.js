const mongoose = require('mongoose');

const ingredientTemplate = {
    resourceType:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    category:String,
    img:String,
};

const ingredientSchema = new mongoose.Schema(ingredientTemplate);

ingredientSchema.pre('save', function() {
    this.resourceType = 'Ingredient';
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = { Ingredient, ingredientTemplate };