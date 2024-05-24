const { User, Item, BlogPost } = require('../models');

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		items: async () => {
			return Item.find();
		},
		blogPosts: async () => {
			return BlogPost.find();
		}
	}
};

module.exports = resolvers;