import React from "react";
import "./local.css";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { UPDATE_COUNTER } from "../../GraphQL/Mutations/count";
import { GET_COUNTER } from "../../GraphQL/Queries/counter";

const Counter = () => {
  const { data = {} } = useQuery(GET_COUNTER);
  const [increment] = useMutation(UPDATE_COUNTER, { variables: { offset: 1 } });
  const [decrement] = useMutation(UPDATE_COUNTER, {
    variables: { offset: -1 },
  });

  return (
    <div>
      <h1>Couter: {data.counter}</h1>
      <div className="controllers">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
