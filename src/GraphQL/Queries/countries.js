import { gql } from "apollo-boost";

export const ALL_COUNTRIES = gql`
  {
    countries(filter: {}) {
      name
      code
    }
  }
`;

export const COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      name
      code
      native
      phone
      capital
      currency
      emoji
      emojiU
      states {
        code
        name
      }
      languages {
        code
        name
        native
        rtl
      }
    }
  }
`;
