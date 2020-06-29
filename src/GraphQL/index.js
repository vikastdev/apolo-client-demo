import ApolloClient, { InMemoryCache } from "apollo-boost";
import { CounterMutations } from "./Mutations/count";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/",
  clientState: {
    defaults: {
      counter: 0,
    },
    resolvers: {
      Mutation: {
        ...CounterMutations,
      },
    },
  },
});

export default client;
