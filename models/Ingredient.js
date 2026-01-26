const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    resourceType:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    category:String,
    img:String,
});

ingredientSchema.pre('save', function() {
    this.resourceType = 'Ingredient';
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;