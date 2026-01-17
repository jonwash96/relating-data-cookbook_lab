const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');

const foodSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	expires:Number,
	notes:String,
	ingredientID:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Ingredient'
	}
})

const userSchema = new mongoose.Schema({
	created:Date,
	resourceType: {
		type: String,
		required: false
	},
	displayname: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		select:false
	},
	pantry: {
		type: [foodSchema],
		required: true
	},
	recipes:{
		byUser:[mongoose.Schema.Types.ObjectId],
		saved:[mongoose.Schema.Types.ObjectId]
	},
	favorites:{
		recipes:[mongoose.Schema.Types.ObjectId],
		ingredients:[mongoose.Schema.Types.ObjectId]
	}
});

userSchema.pre('save', function() {
    this.resourceType = 'User';
	this.created = Date();
});

foodSchema.pre('save', async function() {
    this.resourceType = 'Food';
	if (!this.ingredient) {
		const ingredient = await Ingredient.find({name:this.name});
		if (ingredient) this.ingredient = ingredient._id;
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
