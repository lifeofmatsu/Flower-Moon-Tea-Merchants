const mongoose = require('mongoose');

// Define Item schema
const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	stock: {
		type: Number,
		required: true
	},
	image: {
		type: String
	}
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
