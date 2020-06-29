import React from "react";
import { COUNTRY } from "../../GraphQL/Queries/countries";
import { useQuery } from "@apollo/react-hooks";
import Card from "../../Containers/Cards/cards";

const Country = (props) => {
  const { match } = props;
  const { code } = match.params;
  const { loading, data } = useQuery(COUNTRY, {
    variables: { code },
  });
  return (
    <div style={{ width: "100%" }}>
      {loading && <h4>Loading</h4>}
      <div>
        {data && data.country ? (
          <>
            <Card>Name: {data.country.name}</Card>
            <Card>Code: {data.country.code}</Card>
            <Card>Capital: {data.country.capital}</Card>
            <Card>Flag: {data.country.emoji}</Card>
            <Card>Currency: {data.country.currency}</Card>
            <Card>Native: {data.country.native}</Card>
            <Card>
              Languages:{" "}
              {data.country.languages.map((lang) => {
                return <p key={lang.name}>{lang.name}</p>;
              })}
            </Card>
            <Card>
              States:{" "}
              {data.country.states.map((state) => {
                return <p key={state.name}>{state.name}</p>;
              })}
            </Card>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Country;
