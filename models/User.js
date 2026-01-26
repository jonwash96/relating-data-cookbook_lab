const mongoose = require('mongoose');
const Ingredient = require('./Ingredient.js');

const foodSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	quantity:String,
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
		required: true,
		selected:false
	},
	password: {
		type: String,
		required: true,
		selected:false
	},
	pantry: {
		type: [foodSchema],
		required: true
	},
	recipes:{
		byUser:{
			type:[mongoose.Schema.Types.ObjectId],
			ref:'Recipe'
		},
		saved:{
			type:[mongoose.Schema.Types.ObjectId],
			ref:'Recipe'
		}
	},
	favorites:{
		recipes:{
			type:[mongoose.Schema.Types.ObjectId],
			ref:'Recipe'
		},
		ingredients:{
			type:[mongoose.Schema.Types.ObjectId],
			ref:'Ingredient'
		}
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
		if (ingredient) this.ingredientID = ingredient._id;
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
