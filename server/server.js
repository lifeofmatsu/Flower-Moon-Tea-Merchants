const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const cors = require('cors');

const PORT = process.env.PORT || 4000;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
server.start().then(() => {
	app.use('/graphql', expressMiddleware(server));

	db.once('open', () => {
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
			console.log(
				`GraphQL server running on http://localhost:${PORT}/graphql`
			);
		});
	});
});
