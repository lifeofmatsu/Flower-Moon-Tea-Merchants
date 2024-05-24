const { gql } = require('apollo-server-express');

// Define GraphQL schema
const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		orders: [Order]
	}

	type Item {
		_id: ID
		name: String
		description: String
		price: Float
		category: String
		stock: Int
		image: String
	}

	type BlogPost {
		_id: ID
		title: String
		content: String
		author: String
		categories: [String]
		tags: [String]
		comments: [Comment]
		createdAt: String
	}

	type Comment {
		author: String
		content: String
		createdAt: String
	}

	type Query {
		users: [User]
		items: [Item]
		blogPosts: [BlogPost]
	}
`;

module.exports = typeDefs;