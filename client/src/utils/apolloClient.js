import { ApolloClient, InMemoryCache } from `@apollo/client`;

// Create and configure an Apollo Client instance
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

export default client;