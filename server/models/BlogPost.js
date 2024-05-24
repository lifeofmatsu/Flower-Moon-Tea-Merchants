const mongoose = require('mongoose');

// Define BlogPost schema
const blogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	categories: [
		{
			type: String
		}
	],
	tags: [
		{
			type: String
		}
	],
	comments: [
		{
			author: String,
			content: String,
			createdAt: {
				type: Date,
				default: Date.now
			}
		}
	],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
