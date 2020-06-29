import React from "react";
import { ALL_COUNTRIES } from "../../GraphQL/Queries/countries";
import { useQuery } from "@apollo/react-hooks";
import Card from "../../Containers/Cards/cards";

const Countries = (props) => {
  const { history } = props;
  const { loading, data } = useQuery(ALL_COUNTRIES);
  return (
    <div style={{ width: "100%" }}>
      {loading && <h4>Loading</h4>}
      <div>
        {data
          ? data.countries.map((country) => {
              return (
                <Card
                  key={country.code}
                  onClick={() => history.push(`/country/${country.code}`)}
                >
                  <p style={{ cursor: "pointer" }}>{country.name}</p>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Countries;
