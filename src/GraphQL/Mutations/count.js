import gql from "graphql-tag";
import { GET_COUNTER } from "../Queries/counter";

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export const CounterMutations = {
  updateCounter: (_, variables, { cache }) => {
    const data = cache.readQuery({ query: GET_COUNTER });
    const newCounterValue = data.counter + variables.offset;
    cache.writeData({
      data: { counter: newCounterValue },
    });
    return null;
  },
};
